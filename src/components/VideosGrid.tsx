
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, ThumbsUp, Calendar, Filter } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContentLoader } from '@/components/ui/loaders/ContentLoader';

interface YoutubeVideo {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  viewCount: string;
  likeCount: string;
  category: string;
}

const VideosGrid = () => {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      try {
        // Normally we would use the YouTube API, but for this demo we'll use a static set of videos
        // from Kunal Kamra's actual channel with more accurate data
        const kunalVideos: YoutubeVideo[] = [
          {
            id: 'qaJkEVRGX54',
            title: 'Kunal Kamra Responds To The Crazy Debate On The Chandigarh University MMS Scandal',
            publishedAt: 'Sep 21, 2022',
            thumbnail: 'https://img.youtube.com/vi/qaJkEVRGX54/maxresdefault.jpg',
            viewCount: '2.3M',
            likeCount: '156K',
            category: 'Commentary'
          },
          {
            id: 'X9zyqUwdFQE',
            title: 'What is ANARCHY? | Explained by Akash Banerjee & Kunal Kamra',
            publishedAt: 'May 8, 2023',
            thumbnail: 'https://img.youtube.com/vi/X9zyqUwdFQE/maxresdefault.jpg',
            viewCount: '1.8M',
            likeCount: '142K',
            category: 'Education'
          },
          {
            id: 'pemXGH6pvvs',
            title: 'Why would I care about Manipur? | Kunal Kamra with Akash Banerjee',
            publishedAt: 'Jul 24, 2023',
            thumbnail: 'https://img.youtube.com/vi/pemXGH6pvvs/maxresdefault.jpg',
            viewCount: '1.5M',
            likeCount: '128K',
            category: 'Commentary'
          },
          {
            id: 'fJi-OP0Sq-k',
            title: 'Dealing with a legal notice from Arnab Goswami | Kunal Kamra | Shut Up Ya Kunal',
            publishedAt: 'Apr 26, 2020',
            thumbnail: 'https://img.youtube.com/vi/fJi-OP0Sq-k/maxresdefault.jpg',
            viewCount: '3.2M',
            likeCount: '235K',
            category: 'Podcast'
          },
          {
            id: 'afzEijT6SNs',
            title: 'Truth About Shwetabh Gangwar | Kunal Kamra',
            publishedAt: 'Jun 23, 2023',
            thumbnail: 'https://img.youtube.com/vi/afzEijT6SNs/maxresdefault.jpg',
            viewCount: '984K',
            likeCount: '87K',
            category: 'Commentary'
          },
          {
            id: 'WNUC5xaCGSs',
            title: 'Aap Chronology Samjhiye | Stand-Up Comedy by Kunal Kamra | Part 1 of 5',
            publishedAt: 'Feb 24, 2020',
            thumbnail: 'https://img.youtube.com/vi/WNUC5xaCGSs/maxresdefault.jpg',
            viewCount: '4.7M',
            likeCount: '316K',
            category: 'Stand-up'
          },
          {
            id: 'B7z0gLQ_QDc',
            title: 'AADHA FUNNY | Stand-Up Comedy by Kunal Kamra',
            publishedAt: 'Mar 14, 2022',
            thumbnail: 'https://img.youtube.com/vi/B7z0gLQ_QDc/maxresdefault.jpg', 
            viewCount: '10M',
            likeCount: '467K',
            category: 'Stand-up'
          },
          {
            id: '1M6G4111a0s',
            title: 'Indian PARENTS and MARRIAGE | Stand-Up Comedy by Kunal Kamra',
            publishedAt: 'Apr 10, 2022',
            thumbnail: 'https://img.youtube.com/vi/1M6G4111a0s/maxresdefault.jpg',
            viewCount: '7.2M',
            likeCount: '352K',
            category: 'Stand-up'
          },
        ];

        setVideos(kunalVideos);
        
        // Extract unique categories
        const uniqueCategories = Array.from(new Set(kunalVideos.map(video => video.category)));
        setCategories(uniqueCategories);
        
        setTimeout(() => setIsLoading(false), 800); // Simulate loading delay
      } catch (error) {
        console.error('Error fetching videos:', error);
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const filteredVideos = selectedCategory 
    ? videos.filter(video => video.category === selectedCategory)
    : videos;

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
    // Add overflow-hidden to body to prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    // Restore scrolling when modal is closed
    document.body.style.overflow = '';
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <ContentLoader type="text" />
          </div>
          <div className="mt-4 md:mt-0">
            <ContentLoader type="text" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContentLoader type="video" count={6} />
        </div>
      </div>
    );
  }

  return (
    <div>
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center" 
          onClick={handleCloseVideo}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
          <div 
            className="bg-background/90 backdrop-blur p-4 rounded-lg max-w-4xl w-full relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative pb-[56.25%] h-0 mb-4">
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
              ></iframe>
            </div>
            <Button 
              variant="outline" 
              onClick={handleCloseVideo}
              className="w-full hover:bg-comedy-orange hover:text-white transition-colors"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Latest Videos</h2>
          <p className="text-muted-foreground">
            {filteredVideos.length} videos available
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Filter size={18} />
          <span className="mr-2">Filter by category:</span>
          <Select onValueChange={(value) => setSelectedCategory(value === "all" ? null : value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <div 
            key={video.id} 
            className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-border group"
          >
            <div 
              className="relative h-48 cursor-pointer overflow-hidden"
              onClick={() => handleVideoClick(video.id)}
            >
              <img 
                src={video.thumbnail}
                alt={video.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-comedy-orange/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Youtube size={32} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.viewCount} views
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold line-clamp-2 group-hover:text-comedy-orange transition-colors">
                  {video.title}
                </h3>
                <span className="bg-comedy-orange/10 text-comedy-orange text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2">
                  {video.category}
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{video.publishedAt}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <ThumbsUp size={16} className="text-comedy-orange" />
                    <span>{video.likeCount}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-comedy-orange hover:bg-comedy-orange/90 shadow-lg hover:shadow-comedy-orange/20 transition-all duration-300"
                onClick={() => handleVideoClick(video.id)}
              >
                Watch Now
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="https://www.youtube.com/@KunalKamra" 
          target="_blank" 
          rel="noreferrer"
          className="inline-block"
        >
          <Button variant="outline" size="lg" className="gap-2 group transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-red-600">
            <Youtube size={20} className="group-hover:animate-pulse" />
            Subscribe to YouTube Channel
          </Button>
        </a>
      </div>
    </div>
  );
};

export default VideosGrid;
