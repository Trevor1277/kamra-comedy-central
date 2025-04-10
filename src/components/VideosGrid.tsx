
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, ThumbsUp, Calendar, Filter } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const videos = [
  {
    id: '1',
    title: 'Taking on the Government',
    category: 'Stand-up',
    date: 'Mar 15, 2024',
    views: '2.4M',
    likes: '145K',
    embedId: 'qyKqLVmRvuI',
    thumbnail: 'https://img.youtube.com/vi/qyKqLVmRvu/hqdefault.jpg'
  },
  {
    id: '2',
    title: 'Life in Indian Politics',
    category: 'Stand-up',
    date: 'Jan 20, 2024',
    views: '1.8M',
    likes: '120K',
    embedId: 'qyKqLVmRvuI',
    thumbnail: 'https://img.youtube.com/vi/qyKqLVmRvuI/hqdefault.jpg'
  },
  {
    id: '3',
    title: 'Interview with Journalist',
    category: 'Interview',
    date: 'Nov 5, 2023',
    views: '1.2M',
    likes: '98K',
    embedId: 'qyKqLVmRvuI',
    thumbnail: 'https://img.youtube.com/vi/qyKqLVmRvuI/hqdefault.jpg'
  },
  {
    id: '4',
    title: 'Comedy Podcast Episode',
    category: 'Podcast',
    date: 'Oct 10, 2023',
    views: '950K',
    likes: '82K',
    embedId: 'qyKqLVmRvuI',
    thumbnail: 'https://img.youtube.com/vi/qyKqLVmRvuI/hqdefault.jpg'
  },
  {
    id: '5',
    title: 'Honest Opinion Show',
    category: 'Stand-up',
    date: 'Sep 15, 2023',
    views: '3.1M',
    likes: '235K',
    embedId: 'qyKqLVmRvuI',
    thumbnail: 'https://img.youtube.com/vi/qyKqLVmRvuI/hqdefault.jpg'
  },
  {
    id: '6',
    title: 'Politics and Comedy',
    category: 'Interview',
    date: 'Aug 22, 2023',
    views: '1.5M',
    likes: '112K',
    embedId: 'qyKqLVmRvuI',
    thumbnail: 'https://img.youtube.com/vi/qyKqLVmRvuI/hqdefault.jpg'
  }
];

const categories = Array.from(new Set(videos.map(video => video.category)));

const VideosGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const filteredVideos = selectedCategory 
    ? videos.filter(video => video.category === selectedCategory)
    : videos;

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  return (
    <div>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-background p-4 rounded-lg max-w-4xl w-full">
            <div className="relative pb-[56.25%] h-0 mb-4">
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo}`} 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setSelectedVideo(null)}
              className="w-full"
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
            className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-border"
          >
            <div 
              className="relative h-48 cursor-pointer overflow-hidden group"
              onClick={() => handleVideoClick(video.embedId)}
            >
              <img 
                src={`https://img.youtube.com/vi/${video.embedId}/hqdefault.jpg`}
                alt={video.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <Youtube size={48} className="text-white" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{video.title}</h3>
                <span className="bg-comedy-orange/10 text-comedy-orange text-xs px-2 py-1 rounded-full">
                  {video.category}
                </span>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  <span>{video.date}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span>{video.views} views</span>
                  <div className="flex items-center gap-1">
                    <ThumbsUp size={16} />
                    <span>{video.likes}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-comedy-orange hover:bg-comedy-orange/90"
                onClick={() => handleVideoClick(video.embedId)}
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
        >
          <Button variant="outline" size="lg" className="gap-2">
            <Youtube size={20} />
            Subscribe to YouTube Channel
          </Button>
        </a>
      </div>
    </div>
  );
};

export default VideosGrid;
