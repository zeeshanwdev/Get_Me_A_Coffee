import React from 'react';

async function Username({ params }) {
  
  const resolvedParams = await params;
  const username = resolvedParams.username || "Guest";

  return (
    <>
      <div className="CoverImg w-full bg-red-50 relative">
        <img
          className="object-cover w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-time=1743724800&token-hash=3jRRjnWnIycOk6k6K03qY-fepaDiVq5PShRw7Y2mnLQ%3D"
          alt="Background"
        />
        <div className="profile absolute -bottom-17 right-[46%] border-2 border-white rounded-lg">
          <img
            className="rounded-lg"
            width={115}
            height={115}
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/4.gif?token-time=1742601600&token-hash=1evY2pkGYUKNFzUEdQK6rOlKHW27IxwtJElvUiagVMU%3D"
            alt="Profile"
          />
        </div>
      </div>

      <div className="info flex justify-center items-center my-21 flex-col gap-2 mb-32">
        <div className="font-bold text-xl">@{username}</div>
        <div className="text-slate-400">
          Creating Animated ART For VFX Lover&rsquo;s
        </div>
        <div className="text-slate-400">9,719 members . 82 posts . $150/release</div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Supporter&rsquo;s</h2>
            <ul className="mx-5 text-sm">
              <li className="my-4 gap-2 flex items-center">
                <img className="self-start" src="avatar.gif" alt="User Avatar" width={32} />
                <span>
                  Faizan Donated <span className="font-bold">$30</span> with a
                  Message &quot;Lots of Love From My Side💖&quot;
                </span>
              </li>

              <li className="my-4 gap-2 flex items-center">
                <img className="self-start" src="avatar.gif" alt="User Avatar" width={32} />
                <span>
                  Azlan Donated <span className="font-bold">$100</span> with a
                  Message &quot;We Support You Keep Working On Your Goal✌️&quot;
                </span>
              </li>

              <li className="my-4 gap-2 flex items-center">
                <img className="self-start" src="avatar.gif" alt="User Avatar" width={32} />
                <span>
                  Yasir Donated <span className="font-bold">$5</span> with a
                  Message &quot;Love From Pakistan&quot;
                </span>
              </li>
            </ul>
          </div>

          <div className="makepayments w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Make Payments</h2>
            <input
              className="w-full p-3 bg-slate-800 rounded-lg my-3"
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              className="w-full p-3 bg-slate-800 rounded-lg my-1"
              type="text"
              placeholder="Enter Amount"
            />
            <textarea
              className="w-full p-3 bg-slate-800 rounded-lg my-3"
              placeholder="Enter Message"
            />
            <button className="w-full p-3 text-white hover:cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center">
              Make Payment
            </button>

            <div className="flex gap-4 mt-8">
              <button className="bg-purple-800 p-2 rounded-lg hover:cursor-pointer hover:bg-purple-600">
                Pay $10
              </button>
              <button className="bg-purple-800 p-2 rounded-lg hover:cursor-pointer hover:bg-purple-600">
                Pay $20
              </button>
              <button className="bg-purple-800 p-2 rounded-lg hover:cursor-pointer hover:bg-purple-600">
                Pay $30
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Username;
