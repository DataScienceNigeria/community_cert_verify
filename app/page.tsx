import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main className="flex min-h-screen m-auto items-center justify-center p-24">
      <div className="bg-white rounded-xl">
        <h1 className="text-2xl text-center p-6 font-semibold uppercase">Generate your Award</h1>
        <form className="flex flex-col p-6">
          <div className="mb-8 w-[350px] lg:w-[500px]">
            <label htmlFor="email" className="block text-sm font-bold text-gray-700">
              Email
            </label>
            <input type="email" name="email" id="email" className="mt-1 p-2 border border-gray-300 rounded-md w-[100%]"  placeholder="john@mail.com"/>
          </div>

          <div className="mb-8 w-[350px] lg:w-[500px]">
            <label htmlFor="password" className="block text-sm font-bold text-gray-700">
              Password
            </label>
            <input type="password" name="email" id="email" className="mt-1 p-2 border border-gray-300 rounded-md w-[100%]"  placeholder=""/>
          </div>

          <button type="submit" className="mt-8 w-[100%] p-4 bg-green-800 text-white rounded-xl hover:bg-green-500  transition">Submit</button>

          <div className="mt-8 hover:font-bold cursor-pointer text-left">
            <span className="text-gray-700">Forgot password?</span>
          </div>
        </form>
      </div>
    </main>
  );
}
