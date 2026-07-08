import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, X } from 'lucide-react';
import axios from 'axios';

const placeholderGradients = [
  'linear-gradient(135deg, #1a1208, #2a1f0a)',
  'linear-gradient(135deg, #0a0f1a, #0f1a2a)',
  'linear-gradient(135deg, #0f1a0a, #1a2a0f)',
  'linear-gradient(135deg, #1a0a0f, #2a0f1a)',
  'linear-gradient(135deg, #0a1a1a, #0f2a2a)',
  'linear-gradient(135deg, #1a0f0a, #2a1a0f)',
  'linear-gradient(135deg, #0f0a1a, #1a0f2a)',
  'linear-gradient(135deg, #1a1a0a, #2a2a0f)',
];


function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.35) }}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        boxShadow: 'none'
      }}
      className="group flex flex-col bg-card border border-border/40 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
    >

      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: '16/9',
          background: '#1C170F'
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                placeholderGradients[index % placeholderGradients.length]
            }}
          >
            <span className="font-display text-2xl font-light italic text-center px-4">
              {project.title}
            </span>
          </div>
        )}
      </div>


      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-light text-foreground group-hover:text-primary transition-colors leading-snug">
            {project.title}
          </h3>

          <ArrowUpRight
            size={15}
            className="text-muted-fg/30 group-hover:text-primary transition-all flex-shrink-0 mt-0.5"
          />
        </div>


        <p
          className="text-muted-fg text-xs font-light leading-relaxed flex-1"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {project.description}
        </p>


        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-full border border-border/50 text-muted-fg/60 text-[10px]"
            >
              {t}
            </span>
          ))}
        </div>


        <div className="flex items-center gap-4 pt-2 border-t border-border/30 mt-auto">

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e)=>e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs"
          >
            <Github size={12}/>
            Code
          </a>


          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e)=>e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs"
            >
              <ArrowUpRight size={12}/>
              Live demo
            </a>
          )}

        </div>

      </div>

    </motion.div>
  );
}



function ProjectModal({project,onClose}){

return(
<motion.div
className="fixed inset-0 z-50 flex items-center justify-center p-4"
style={{
background:'rgba(19,16,10,0.85)'
}}
onClick={onClose}
>


<motion.div
onClick={(e)=>e.stopPropagation()}
className="bg-card rounded-2xl overflow-hidden max-w-3xl w-full"
>


<div className="p-6">

<h3 className="text-3xl mb-3">
{project.title}
</h3>


<p>
{project.description}
</p>


<div className="flex flex-wrap gap-2 mt-4">

{project.tech.map(t=>(
<span
key={t}
className="border px-3 py-1 rounded-full text-xs"
>
{t}
</span>
))}

</div>


</div>

</motion.div>

</motion.div>
)

}




export default function Projects(){

const [projects,setProjects]=useState([]);
const [selected,setSelected]=useState(null);
const [loading,setLoading]=useState(true);



useEffect(()=>{

axios
.get(`${import.meta.env.VITE_BACKEND_URL}/api/projects`)
.then((res)=>{
setProjects(res.data);
})
.catch((err)=>{
console.error("Projects API Error:",err);
})
.finally(()=>{
setLoading(false);
});


},[]);



return(

<section id="projects" className="py-28">

<div className="container mx-auto px-6">

<h2 className="text-5xl mb-12">
Selected <i>projects</i>
</h2>


{
loading ? (

<p>
Loading projects...
</p>

):

(

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

{
projects.map((project,index)=>(

<ProjectCard
key={project._id}
project={project}
index={index}
onClick={()=>setSelected(project)}
/>

))

}

</div>

)

}


</div>


<AnimatePresence>

{
selected &&

<ProjectModal
project={selected}
onClose={()=>setSelected(null)}
/>

}

</AnimatePresence>


</section>


)


}