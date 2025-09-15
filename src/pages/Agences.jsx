import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLocation } from "react-router-dom";

// Supabase setup
const supabaseUrl = "https://acfwapwfycydbvyaznmh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjZndhcHdmeWN5ZGJ2eWF6bm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4MjYwMDksImV4cCI6MjA3MzQwMjAwOX0.A0HXwG7klHYVla08qs-EOArdhj0PhwmOw1Tc438l_c8";
const supabase = createClient(supabaseUrl, supabaseKey);

const Agences = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to generate random sentiment
  const getRandomSentiment = () => {
    const sentiments = ["Positive", "Negative", "Neutral"];
    return sentiments[Math.floor(Math.random() * sentiments.length)];
  };

  // Get category from URL parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const scrollContainerRef = useRef(null);
  const newsItemRefs = useRef([]);
  const leftSideRef = useRef(null);

  // Set selected category from URL parameters
  useEffect(() => {
    const category = queryParams.get("filter");
    if (category) setSelectedCategory(category);
  }, [location.search]);

  // Fetch news dynamically from Supabase
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        let query = supabase.from("news_data").select("*").order("published", {
          ascending: false,
        });

        if (selectedCategory && selectedCategory !== "All") {
          query = query.eq("category", selectedCategory);
        }

        const { data, error } = await query;
        if (error) throw error;
        if (data) setNewsItems(data);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError(err.message || "Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    // Realtime subscription for new news
    const subscription = supabase
      .channel("public:news_data")
      .on("INSERT", (payload) => {
        setNewsItems((prev) => [payload.new, ...prev]);
      })
      .subscribe();

    return () => subscription.unsubscribe();
  }, [selectedCategory]);

  const bgTexture =
    "https://media.istockphoto.com/id/1203011577/vector/newspaper-with-old-grunge-vintage-unreadable-paper-texture-background.jpg?s=612x612&w=0&k=20&c=b16KyYgiKLgpjf1Z18HDLjD4z3QfDB31e3tVgk-GoYk=";

  useGSAP(() => {
    if (newsItems.length > 0 && leftSideRef.current) {
      gsap.fromTo(
        ".left-content",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, [activeNewsIndex, newsItems]);

  const handleNewsItemClick = (index) => {
    setActiveNewsIndex(index);
    if (newsItemRefs.current[index]) {
      newsItemRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  // Scroll handling to auto-update left content
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || newsItemRefs.current.length === 0)
        return;

      const containerRect = scrollContainerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      newsItemRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - containerCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeNewsIndex) setActiveNewsIndex(closestIndex);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer)
      scrollContainer.addEventListener("scroll", handleScroll);
    return () =>
      scrollContainer?.removeEventListener("scroll", handleScroll);
  }, [activeNewsIndex, newsItems]);

  return (
    <div
      className="hero min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="pt-25 text-[11vw] font-[font1] uppercase leading-[9vw] text-gray-800 flex flex-wrap">
        <span className="mr-10">Today</span>
        HeadLinx&apos;s
      </h1>

      {/* Filter Section */}
      <div className="flex gap-2 mt-6">
        {["All", "Technology", "Sports", "Crime", "Politics", "International", "Entertainment"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full font-medium ${
                selectedCategory === cat
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {loading ? (
        <div className="flex items-center justify-center p-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="text-red-600 p-10">{error}</div>
      ) : newsItems.length === 0 ? (
        <div className="text-gray-200 p-10">No news available.</div>
      ) : (
        <div className="relative bg-[#0b0b0b]/80 rounded-[20px] shadow-2xl w-full max-w-[1200px] flex flex-col md:flex-row overflow-hidden mt-12 h-[99vh] mb-1">
          {/* Left Side */}
          <div
            ref={leftSideRef}
            onClick={() => window.open(newsItems[activeNewsIndex]?.link, '_blank')}
            className="relative flex-[3] p-6 flex flex-col justify-end min-h-screen md:p-8 transition-all duration-500 cursor-pointer hover:opacity-90"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[20px] shadow-md z-0 transition-opacity duration-500"
              src={newsItems[activeNewsIndex]?.image}
              alt={newsItems[activeNewsIndex]?.title}
            />
            <div className="left-content relative z-10 h-full flex flex-col transition-all duration-500">
              {(() => {
                const randomSentiment = getRandomSentiment();
                return (
                  <>
                    {/* Badges - Top Right */}
                    <div className="absolute top-4 right-4 flex flex-wrap gap-2 text-xs">
                      <span className="bg-[#0b0b0b] text-white px-2 py-0.5 rounded-full shadow-md">
                        🗓️ {newsItems[activeNewsIndex]?.published}
                      </span>
                      <span
                        className={`text-white px-2 py-0.5 rounded-full shadow-md ${
                          randomSentiment === "Positive"
                            ? "bg-green-600"
                            : randomSentiment === "Negative"
                            ? "bg-red-600"
                            : "bg-gray-600"
                        }`}
                      >
                        {randomSentiment}
                      </span>
                      <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full shadow-md">
                        📰 {newsItems[activeNewsIndex]?.category}
                      </span>
                    </div>

                    {/* Title + Description - At Bottom */}
                    <div className="flex-1 flex flex-col justify-end pb-4">
                      <h1 className="main-title text-2xl font-[font5] text-white leading-snug mb-2">
                        <span className="inline-block bg-red-500/60 px-2 py-1 rounded">
                          {newsItems[activeNewsIndex]?.title}
                        </span>
                      </h1>
                      <p className="text-sm text-white leading-relaxed max-w-lg">
                        <span className="inline-block bg-black/60 px-2 py-1 rounded">
                          {newsItems[activeNewsIndex]?.description}
                        </span>
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          {/* Right Side - Vertical Scrolling */}
          <div
            ref={scrollContainerRef}
            className="flex-[1] p-2 rounded-r-[20px] bg-black overflow-y-auto flex flex-col gap-2 scrollbar-hide h-full"
          >
            {newsItems.map((item, index) => (
              <div
                key={item.link}
                ref={(el) => (newsItemRefs.current[index] = el)}
                className={`flex-shrink-0 p-2 cursor-pointer transition-all duration-300 ${
                  activeNewsIndex === index
                    ? "bg-[#1a1a1a] scale-105 border-l-4 border-[#FF0000]"
                    : "bg-transparent"
                }`}
                onClick={() => handleNewsItemClick(index)}
              >
                <div className="flex flex-col gap-1">
                  <img
                    className="w-full h-20 rounded-xl object-cover shadow-md"
                    src={item.image}
                    alt={item.title}
                  />
                  <span className="text-xs font-medium bg-red-500 px-1 rounded text-white">
                    {item.title}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <span>{item.published}</span>
                    <span>•</span>
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>{getRandomSentiment()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Agences;
