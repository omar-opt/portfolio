import Image from "next/image";
function page() {
  return (
    <div className="relative flex flex-col  justify-center items-center">
      <div className="absolute -z-10 top-0 left-0 w-full lg:h-[380px] h-[50%] ">
        <Image
          alt="HeroImage"
          src={"/Log_in.svg"}
          fill
          className="object-cover object-bottom "
        />
      </div>
      <div className="bg-white mt-64 w-[462px] h-[350px]  flex justify-center items-center p-5 md:p-5 rounded-lg">
        <div className=" w-full text-right gap-y-6">
          <p className="text-center text-4xl text-nowrap ">
            <span className="text-center text-[32px]">😊</span>
            خاص بالأدمن
          </p>

          <div className="flex w-full  text-right flex-col gap-y-4 mt-4">
            <div className="w-full gap-y-2">
              {" "}
              <p className="text-right text-sm">بريدك الإلكتروني</p>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full text-opacity-10 text-end border px-2 py-2 rounded-md  text-sm"
              />
            </div>
            <div className="w-full gap-y-2">
              <p className="text-sm">كلمة السر</p>
              <input
                type="password"
                name=""
                dir="rtl"
                placeholder="أدخل كلمة السر الخاصة بك"
                className="w-full text-opacity-10 text-start text-sm border rounded-md px-2 py-2 "
              />
            </div>
            <p className="text-[#2C5364] text-start">نسيت كلمة السر ؟</p>
            <button className="py-3 px-5 rounded-lg button-gradient text-white w-full">
              تسجيل الدخول{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
