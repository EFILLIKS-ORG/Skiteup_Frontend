const WelcomeBanner = () => {
    return (
        <section className="relative flex min-h-[290px] w-full flex-col items-center justify-between overflow-hidden rounded-[30px] bg-gradient-to-r from-[#082944] via-[#075F91] to-[#078BD0] px-6 py-7 shadow-[0_18px_35px_rgba(20,70,110,0.18)] sm:px-10 sm:py-9 lg:flex-row lg:items-center">

            <div className="z-10 w-full">
                <p className="mb-[14px] text-base md:text-[19px] font-semibold leading-[1.4] text-[#B9DDF3]">
                    Welcome back, Neha Verma <span>👋</span>
                </p>

                <h1 className="m-0 text-3xl md:text-[46px] font-bold leading-[1.2] text-white">
                    Let’s learn something new today!
                </h1>

                <div className="my-[25px] h-px w-full max-w-[750px] bg-white/20" />

                <div className="flex flex-wrap items-center gap-[14px]">
                    <span className="inline-flex items-center rounded-full bg-white/[0.13] px-4 py-[9px] text-[13px] md:text-[15px] font-bold text-[#E3F3FC]">
                        DEPT: IT
                    </span>

                    <span className="inline-flex items-center rounded-full bg-white/[0.13] px-4 py-[9px] text-[13px] md:text-[15px] font-bold text-[#E3F3FC]">
                        BATCH: 2031
                    </span>

                    <span className="inline-flex items-center rounded-full bg-white/[0.13] px-4 py-[9px] text-[13px] md:text-[15px] font-bold text-[#E3F3FC]">
                        SECTION: A
                    </span>
                </div>
            </div>

            <div className="relative mt-8 flex item-center justify-center lg:absolute lg:right-10 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">

                <div className="flex h-[240px] w-[240px] items-center justify-center rounded-full border border-white/15">
                    <div className="flex h-[180px] w-[180px] items-center justify-center rounded-full border border-white/15">
                        <div className="flex h-[125px] w-[125px] items-center justify-center rounded-full border border-white/20">
                            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white/[0.16] text-2xl font-bold text-white shadow-inner backdrop-blur-md">
                                AI
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WelcomeBanner;