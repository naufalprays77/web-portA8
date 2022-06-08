import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <section id="home" className="min-h-[85vh] bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="container flex flex-col items-center self-center pt-40">
          <div className="text-7xl font-bold">Join Project</div>
          <div className="flex flex-row gap-5 mt-10">
            <div className="bg-black px-6 py-3 text-white hover:bg-white hover:text-black">
              <Link to="/Calculator">Calculator</Link>
            </div>
            <div className="bg-black px-6 py-3 text-white hover:bg-white hover:text-black">
              <Link to="/ToDoList">ToDoList</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
