// Home Page

export default function Home() {
  return (
    <>
    {/* Div 1 */}
    <div className="flex justify-center flex-col text-white h-[80vh] items-center gap-5">

      <div className="flex justify-center items-center gap-1 font-bold text-5xl">Buy Me a Coffee<span><lord-icon className="w-15 h-15" src="https://cdn.lordicon.com/tonguyuk.json" trigger="hover" state="hover-steam" colors="primary:#ebe6ef,secondary:#c69cf4,tertiary:#a66037"></lord-icon></span></div>
      <p className="text-slate-300 font-bold">Crowed Funding Platform For Creators. Get Funded By Your Favourite Fan & Follower&apos;s...</p>

      <div>
      <button type="button" className="text-white hover:cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Start Now
      </button>
      <button type="button" className="text-white hover:cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Read More
      </button>
      </div>

    </div>

    {/*Custom HR*/}
    <div className="bg-slate-50 h-1 opacity-10"></div>

    {/* Div 2 */}
    <div className="text-white container mx-auto py-14">
      <h2 className="text-3xl font-bold text-center mb-4">Your Fans Can Buy You a Coffee</h2>

      {/* Child Div */}
      <div className="flex flex-wrap gap-5 justify-around w-full ml-9">

        <div className="flex flex-col items-center justify-center p-7 space-y-3">
          <div className="rounded-full px-3 py-2">
            <lord-icon className="w-15 h-15" src="https://cdn.lordicon.com/rhmhivzj.json" trigger="hover"></lord-icon>
          </div>
          <p className="font-bold">Fund Your Self</p>
          <p className="text-center text-slate-300">Your Fan's Available For Help You Grow</p>
        </div>

        <div className="flex flex-col items-center justify-center p-7 space-y-3">
          <div className="rounded-full px-3 py-2">
            <lord-icon className="w-15 h-15" src="https://cdn.lordicon.com/ksdvxnxn.json" trigger="hover" colors="primary:#f9c9c0,secondary:#ffffff"></lord-icon>
          </div>
          <p className="font-bold">Direct Support</p>
          <p className="text-center text-slate-300">Receive Funds Directly From Your Fans, No Middleman</p>
        </div>

        <div className="flex flex-col items-center justify-center p-7 space-y-3">
          <div className="rounded-full px-3 py-2">

            <lord-icon className="w-15 h-15" src="https://cdn.lordicon.com/ldpyyqjp.json" trigger="hover"></lord-icon>
          </div>
          <p className="font-bold">Build Your Community</p>
          <p className="text-center text-slate-300">Engage With Supporters And Grow A Loyal Fanbase</p>
        </div>
        

      </div>
      
    </div>

    {/*Custom HR*/}
    <div className="bg-slate-50 h-1 opacity-10"></div>

    {/* Div 3 */}
    <div className="text-white container mx-auto py-14 flex flex-col items-center">
  <h2 className="text-3xl font-bold text-center mb-4">Learn More About Us</h2>

    {/* Child Div */}
   <div className="text-center mx-auto w-1/2 mb-6">
    <p className="text-slate-300 mt-2 leading-loose">
      We are a fan-funded platform designed to help creators receive direct support from their audience. 
      Whether you're an artist, influencer, or content creator, your fans can fund your journey and help you grow.  
      No hidden fees, no middleman—just direct support and community building.
    </p>
   </div>
   </div>



    </>
  );
}

