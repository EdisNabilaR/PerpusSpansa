import React from "react";
import Sidebar from "../components/sidebar";
import BookForm from "./bookform";



const Dataperpus = () => {
    return (
        <section className="flex gap-6">
          <Sidebar />
          <div className="flex-1 m-3 text-xl text-gray-900 font-semibold">
            <BookForm />
          </div>
        </section>
      );
    };
    

export default Dataperpus