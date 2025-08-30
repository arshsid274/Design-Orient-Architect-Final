function ContactForm(){
    return (
        <>
        <div className=" bg-[#252525] flex   flex-col lg:flex-row items-center    lg:justify-evenly py-8 lg:py-10">


            <div >
            <h3 className="uppercase text-[#c6a47e] text-3xl py-2 lg:py-4 ">Design Consultancy</h3>
            </div>

            <div className="py-4">

            <fieldset className="fieldset  ">
            <legend className="fieldset-legend w-[250px] "></legend>
            <input type="text" placeholder="Your Name"
            className="input input-bordered w-[250px] bg-[#252525] text-white border-[#c6a47e] focus:border-[#c6a47e] focus:outline-none focus:shadow-none"
/>
            
            </fieldset>
            </div>

            <div className="pt-8 py-4 ">
            {/* <label className="input validator w-[250px] bg-[#252525] focus:outline-none focus:shadow-none ">
            <svg className="h-[1em] text-white   opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="none"><path d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z" fill="currentColor"></path></g></svg>
            <input type="tel" className="tabular-nums text-white  " required placeholder="Phone" pattern="[0-9]*" minlength="10" maxlength="10" title="Must be 10 digits" />
            </label> */}

<label className="relative input input-bordered w-[250px] bg-[#252525] text-white border-[#c6a47e] focus-within:border-[#c6a47e] focus-within:outline-none focus-within:shadow-none">
 
  <input
    type="tel"
    required
    placeholder="Phone"
    pattern="[0-9]*"
    minLength="10"
    maxLength="10"
    title="Must be 10 digits"
    className="tabular-nums w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
  />
</label>

            
            </div>

            <div className="py-6"> <button className="uppercase border-2 border-[#c6a47e] text-white px-6 py-3 lg:px-8 lg:py-2 lg:mt-2">Get It now</button></div>


           

           
            
         

            
            
           
        </div>
        </>
    );
}

export default ContactForm;