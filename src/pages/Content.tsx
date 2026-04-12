import { motion } from 'motion/react';
import { BookOpen, Video, PlayCircle } from 'lucide-react';

export default function Content() {
  const insights = [
    {
      category: 'Anxiety',
      title: 'The Hidden Cost of High-Functioning Anxiety',
      type: 'Article',
      icon: <BookOpen className="w-4 h-4" />,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCygHCUcWLO9UuDZR912DUlPN_7amg7Z36UXAOWMiMDs9rZzbrgmDdMg-XOy-Ktlec5hD0PVeT22rls-k_Bkp1r78sQFSjn3DmCVmPiVnu5-7zGGiZjFFeiqnSSGNQBtaX_TKq5NppUbbyieZJdoWRf7TfVojOOzGr4Ro-UtWhwYq91mlrpqf3Hh1Z7QRY2ej-aZm4hbRbBEqMMb_EKPuZ8qgvrh49zUCXRYF3A0SWpnKANQuDDpy6hUMgraYZTTOQPFniw_BcNiECt'
    },
    {
      category: 'Emotional Mastery',
      title: 'Why You Can\'t "Think" Your Way Out of a Trigger',
      type: 'Video',
      icon: <Video className="w-4 h-4" />,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnfo8XkwiAPjHU-VDOALiBrpaqMJU1BKLcpOFGTT5P1chYDZyHMtn5PyX7Pn83zARuYXnlb3dNC7cKkCSNHOiPlc9qaMckhmYVoVWQHKSXmIpvUb9XBqr82PzNEjWSbQlRmqEuwP34KQBXGbZlgatJjq0w0c9njnc0gt74MDQRbR6IPw8wLsPRrh46vOp692ZUxG2I533ths5-ilUOPcQ9t1mtFEiRtB1QcTjeMayIWSivN7mPiWgyjGW1EyUdBOMYAB65uLMoIZMD'
    },
    {
      category: 'Inner Child Healing',
      title: 'Re-parenting: The Key to Adult Relationships',
      type: 'Article',
      icon: <BookOpen className="w-4 h-4" />,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJUVQbAptUzypw4hw9piHkHhaG589gVXQ11AlvfJt1mg874HKfi0yWSOZgwbd-9e8YC3wbncsLXO26lL_pjxXcWFjsReZCqdojVvPMsludnQRb6gmv0mVwnPtPpWVwoY3v_7JsdGEmHxo-HUACuY9_ACreTWnjsfgGBAgXqjCBDD7qdCEDDWrSk45X21n_CisMh0hl8GW4byC3i8lhEvLQL3Hj8_dBytPXp4X3Gs61YOuH4qRRRXARKY4N7Mhsdcy8lTGLhrifOwmT'
    },
    {
      category: 'Mindfulness',
      title: 'A 5-Minute Somatic Reset for Overwhelm',
      type: 'Reel',
      icon: <PlayCircle className="w-4 h-4" />,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmE2Meem68dIm2IYwPkLm-jQ3Q9IIfh95kaywla84KFzG1WEshBUkgo1buh-iefdQypIi4JreHOaTsqJdIUnxXD7I2S9BBjRVPzckz9LHys-WorIoSyjm-UKXEuFY9ExJYEw4VhcVbm_42YegydWFf7ZHoIvtTklSlA5EhVuNvOmpEvP9dI8DVVi_K6KLADWAgXdU3CitMRNQsMOiBP-j8iJlHA1G8Iz9EfcuQg8mJKthRBCRbsdVsHJkWi7WFGoDJofTigACuwjdO'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-[#f5f4f0] py-24 border-b border-black/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6 md:px-12 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-6 block">Library</span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-[#1a1a1a] mb-8">
            Insights for Your <span className="italic text-[#9c8257]">Emotional Growth</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Explore articles, videos, and practices designed to help you understand your mind and regulate your nervous system.
          </p>
        </motion.div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {['All', 'Anxiety', 'Emotional Mastery', 'Inner Child Healing', 'Mindfulness'].map((filter, i) => (
            <button 
              key={filter}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${i === 0 ? 'bg-[#60523f] text-white' : 'bg-white border border-black/10 text-gray-500 hover:border-[#60523f] hover:text-[#60523f]'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] rounded-[2rem] overflow-hidden mb-6 relative bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.2]"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">
                  {item.icon} {item.type}
                </div>
              </div>
              <span className="text-[#9c8257] text-xs font-bold uppercase tracking-widest mb-3 block">{item.category}</span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] group-hover:text-[#60523f] transition-colors leading-tight">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
