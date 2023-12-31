export default function CebinaeArticle() {
    return(
        <article className="flex flex-col text-lightPrimary h-[65vh] w-[50vw] justify-evenly self-center
        
        
        
        ">
        <p>
            This website was made as a representation of my current skills and serve as a soft way
            to find out about me
        </p>
        <h1 >
           Key techologies :
        </h1>
        <p>
            Next.js, Tailwind, Three.js(react-three-fiber), Gsap, TypeScript
        </p>
        <p>
            To achieve the least load time and a better usage perfomance this website use 
            as less third-party libraries as possible. 
            A lot of optimization work was done and still theres's a lot to do:
        </p>
        <h1>TODO:</h1>
        <li>
            Adaptivness is done for medium screens and support of mobile devices is upcoming
        </li>
        <li>
            Get rid of javascript-based animations everywhere it's possible to reduce CPU load by delegating calculations to GPU thread
        </li>
        <li>
            Change default three.js render loop to my own custom in order to acieve a deeper control above 
            3d model
        </li>
        <li>
            Surely, there's a way to make 3d model even lighter itself - in addition to polygons decreasing and 3x times texures weight
            reducing, 'scene' and 'model' optimizations can be done.  
        </li>
       
        <p>
            All of these will be done soon according to the task priority
       </p>
    </article>
    )
}