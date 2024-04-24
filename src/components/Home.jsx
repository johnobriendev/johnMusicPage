export default function Home(){
    return(
        <div className="w-full h-full flex flex-col gap-10 items-center py-10 px-2">
            <img src="john-home.jpg" alt="" className=""/>
            <h1 className="text-xl">Guitarist, Composer, Educator</h1>
            <div className="h-[400px] min-w-[300px] max-w-[400px] bg-pink-300">This is a fake image</div>
            <p className="p-2">John is a guitar player from Bethlehem, Pennsylvania.</p>
        </div>
    )
}