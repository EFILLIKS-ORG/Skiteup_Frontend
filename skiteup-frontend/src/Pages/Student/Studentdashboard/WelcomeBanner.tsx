const WelcomeBanner = () => {
    return (
        <section className="relative flex min-h-[310px] w-full items-center justify-between overflow-hidden rounded-[42px] bg-gradient-to-r from-[#104A70] via-[#075F91] to-[#078BD0] px-8 py-12 md:px-[42px] md:py-[58px] shadow-[0_18px_35px_rgba(20,70,110,0.18)]">

            {/* Content */}
            <div className="relative z-10 w-full lg:w-[calc(100%-300px)]">

                {/* Welcome Text */}
                <p className="mb-[14px] text-base md:text-[19px] font-semibold leading-[1.4] text-[#B9DDF3]">
                    Welcome back, Neha Verma <span>👋</span>
                </p>

                {/* Main Heading */}
                <h1 className="m-0 text-3xl md:text-[46px] font-bold leading-[1.2] text-white">
                    Let’s learn something new today!
                </h1>

                {/* Divider */}
                <div className="my-[25px] h-px w-full max-w-[750px] bg-white/20" />

                {/* Student Information */}
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

            {/* AI Circle (Hidden on mobile to save space) */}
            <div className="absolute right-[72px] top-1/2 hidden lg:flex h-[190px] w-[190px] -translate-y-1/2 items-center justify-center">

                {/* Outer Ring */}
                <div className="absolute flex h-[190px] w-[190px] items-center justify-center rounded-full border border-white/[0.18]">

                    {/* Inner Ring */}
                    <div className="flex h-[135px] w-[135px] items-center justify-center rounded-full border border-white/[0.18]">

                        {/* AI Center */}
                        <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-white/[0.12] text-[31px] font-bold text-white">
                            AI
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeBanner;