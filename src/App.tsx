import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { GravityStarsBackground } from "./components/animate-ui/components/backgrounds/gravity-stars";
import { Shine } from "./components/animate-ui/primitives/effects/shine";
import { AnimateIcon } from "./components/animate-ui/icons/icon";
import { CopyButton } from "./components/animate-ui/components/buttons/copy";

// Variants ساده و نرم
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    } as const,
  },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    } as const,
  },
} as const;

// Variants برای کارت‌ها (اتصال و favorites)
const connectCardVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 14,
    } as const,
  },
} as const;

const images = [
  "/esteghlal.png",
  "/Apple_logo_white.svg.png",
  "/nike.png",
  "/liverpol.png",
  "/Jordan.png",
  "/Benz.png",
  "/PlayStation.png",
  "/Amir-tataloo.png",
];

function App() {
  const [showConnect, setShowConnect] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [hideHeaderAndMarquee, setHideHeaderAndMarquee] = useState(false);

  const handleConnectClick = () => {
    setShowConnect(true);
    setHideHeaderAndMarquee(true);
    setShowAbout(false);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setHideHeaderAndMarquee(true);
    setShowConnect(false);
  };

  return (
    <div className="relative min-h-dvh w-full bg-black overflow-x-hidden">
      {/* پس‌زمینه ستاره‌ها */}
      <GravityStarsBackground
        className="absolute inset-0"
        starsCount={50}
        starsSize={1.6}
        starsOpacity={0.65}
        glowIntensity={10}
        mouseInfluence={0}
        mouseGravity="attract"
        gravityStrength={50}
        starsInteraction={false}
      />

      {/* محتوای اصلی */}
      <motion.div
        className="relative z-10 min-h-dvh w-full max-w-[390px] mx-auto flex flex-col items-center gap-10 px-5 pt-6 pb-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* هدر و marquee فقط وقتی هیچ صفحه فرعی باز نیست */}
        {!hideHeaderAndMarquee && (
          <>
            <motion.header variants={fadeUp}>
              <h1 className="text-white font-bold text-center py-10 text-4xl sm:text-5xl italic tracking-tight">
                <Shine>Parham Moradi</Shine>
              </h1>
            </motion.header>

            <div className="w-full overflow-hidden py-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <motion.div
                  className="flex whitespace-nowrap"
                  variants={{
                    animate: {
                      x: ["0%", "-50%"],
                      transition: {
                        x: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 10,
                          ease: "linear",
                        },
                      },
                    },
                  }}
                  animate="animate"
                >
                  {[...images, ...images].map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`logo ${index + 1}`}
                      className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-xl mx-4 shadow-sm flex-shrink-0"
                      loading="lazy"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </>
        )}

        {/* صفحه اصلی */}
        {!hideHeaderAndMarquee && (
          <>
            <motion.main
              variants={fadeUp}
              whileTap={{ scale: 0.96 }}
              className="
                flex flex-col items-center text-center w-full 
                border-4 border-white/70 rounded-3xl 
                bg-gray-950/50 backdrop-blur-md 
                p-8 sm:p-10 gap-5 text-white 
                shadow-2xl shadow-blue-950/40
                transition-all duration-300
              "
            >
              <motion.h1 variants={fadeUp} className="font-bold text-3xl sm:text-4xl tracking-wide">
                Hello My Friend!
              </motion.h1>

              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-medium">
                it's parham .
              </motion.h2>

              <motion.h3 variants={fadeUp} className="text-gray-400 text-lg sm:text-xl mt-1">
                You can find me here :
              </motion.h3>

              <motion.button
                variants={fadeUp}
                whileTap={{ scale: 0.93 }}
                onClick={handleConnectClick}
                className="
                  flex items-center justify-center gap-2 mt-6 px-2 py-4 
                  font-bold 
                  bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 
                  hover:from-blue-600 hover:via-blue-500 hover:to-blue-400
                  rounded-3xl shadow-xl shadow-blue-700/50
                  border border-blue-400/40
                  transition-all duration-350 ease-out
                  active:scale-95 active:shadow-blue-600/60
                "
              >
                Click here to connect with me
                <AnimateIcon animateOnHover>
                  <BadgeCheck className="w-7 h-7" />
                </AnimateIcon>
              </motion.button>
            </motion.main>

            <motion.button
              variants={fadeUp}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 35px 5px rgba(59, 130, 246, 0.5)",
                borderColor: "rgba(147, 197, 253, 0.7)",
              } as const}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 17 } as const}
              onClick={handleAboutClick}
              className="
                relative overflow-hidden px-10 py-5 mt-4
                text-xl sm:text-xl font-bold text-white tracking-wide
                bg-gradient-to-br from-indigo-600/80 via-purple-600/70 to-blue-700/80
                backdrop-blur-lg border-2 border-indigo-400/60 rounded-2xl
                shadow-2xl shadow-indigo-900/50 hover:shadow-indigo-500/60
                transition-all duration-400 ease-out active:scale-95
              "
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-700 -translate-x-full hover:translate-x-full" />
              About me
            </motion.button>
          </>
        )}

        {/* صفحه About Me - تم آبی خفن */}
        {showAbout && (
          <motion.div
            className="w-full flex flex-col items-center gap-10 py-10 px-4 text-white"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent tracking-tight drop-shadow-2xl"
            >
              About Me
            </motion.h1>

            {/* کارت اطلاعات اصلی - گرادیانت آبی نئونی */}
            <motion.div
              variants={fadeUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                w-full max-w-lg p-8 rounded-3xl 
                bg-gradient-to-br from-blue-950/90 via-indigo-950/80 to-cyan-950/70
                backdrop-blur-2xl border border-cyan-500/40
                shadow-2xl shadow-cyan-900/70 hover:shadow-cyan-600/80
                transition-shadow duration-500
              "
            >
              <div className="space-y-8 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <span className="text-5xl drop-shadow-md">👤</span>
                  <div>
                    <div className="text-cyan-300 font-semibold text-2xl">Full Name</div>
                    <div className="text-3xl font-bold text-white">Parham Moradi</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <span className="text-5xl drop-shadow-md">🎂</span>
                  <div>
                    <div className="text-cyan-300 font-semibold text-2xl">Birthday</div>
                    <div className="text-3xl font-bold text-white">14 August 2008</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <span className="text-5xl drop-shadow-md">📍</span>
                  <div>
                    <div className="text-cyan-300 font-semibold text-2xl">Lives in</div>
                    <div className="text-3xl font-bold text-white">Shahriyar city</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <span className="text-5xl drop-shadow-md">☕</span>
                  <div>
                    <div className="text-cyan-300 font-semibold text-2xl">Work</div>
                    <div className="text-3xl font-bold text-white">Barista</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* بخش Favorites - با انیمیشن اسکرول */}
            <motion.div 
              variants={fadeUp} 
              className="w-full"
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg">
                Favorites
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { name: "Esteghlal", src: "/esteghlal.png" },
                  { name: "Liverpool", src: "/liverpol.png" },
                  { name: "Nike", src: "/nike.png" },
                  { name: "Jordan", src: "/Jordan.png" },
                  { name: "Benz", src: "/Benz.png" },
                  { name: "Apple", src: "/Apple_logo_white.svg.png" },
                  { name: "PlayStation", src: "/PlayStation.png" },
                  { name: "Amir Tataloo", src: "/Amir-tataloo.png" },
                ].map((fav, index) => (
                  <motion.div
                    key={index}
                    variants={connectCardVariants}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -10, rotate: 2 }}
                    className="
                      flex flex-col items-center gap-4 p-4 rounded-3xl
                      bg-gradient-to-br from-blue-950/80 to-indigo-950/70
                      backdrop-blur-xl border border-cyan-600/50
                      shadow-xl shadow-cyan-900/60 hover:shadow-cyan-500/80 hover:border-cyan-400/70
                      transition-all duration-400
                    "
                  >
                    <img
                      src={fav.src}
                      alt={fav.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-2xl"
                    />
                    <span className="text-lg sm:text-xl font-bold text-cyan-200">{fav.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* دکمه بازگشت */}
            <motion.button
              variants={fadeUp}
              whileTap={{ scale: 0.94 }}
              className="
                mt-16 px-14 py-6 text-2xl font-bold
                bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-900
                hover:from-blue-700 hover:via-indigo-600 hover:to-blue-800
                border border-cyan-600/60 rounded-3xl shadow-2xl shadow-cyan-900/50
                text-white transition-all duration-400 active:scale-95 hover:shadow-cyan-600/70
              "
            >
              Thank's for watching
            </motion.button>
          </motion.div>
        )}

        {/* صفحه Connect */}
        {showConnect && (
          <motion.div
            className="w-full flex flex-col gap-6 py-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={connectCardVariants}
              className="
                flex items-center gap-5 p-6 rounded-2xl
                bg-gray-900/60 backdrop-blur-md border border-cyan-500/50
                shadow-xl shadow-cyan-900/40 text-white text-lg font-medium
                hover:scale-[1.02] transition-transform duration-300
              "
            >
              <img src="/Phone.png" alt="Phone" className="w-10 h-10 object-contain flex-shrink-0" />
              <span>+98 936 698 1815</span>
              <CopyButton content="+98 936 698 1815" className="ml-6"/>
            </motion.div>

            <motion.a
              href="https://t.me/parham_yakuza"
              target="_blank"
              rel="noopener noreferrer"
              variants={connectCardVariants}
              whileHover={{ scale: 1.04 } as const}
              whileTap={{ scale: 0.96 }}
              className="
                flex items-center gap-5 p-6 rounded-2xl cursor-pointer
                bg-gray-900/60 backdrop-blur-md border border-blue-500/50
                shadow-xl shadow-blue-900/40 text-white text-lg font-medium
                hover:scale-[1.02] hover:shadow-blue-500/50 transition-all duration-300
              "
            >
              <img src="/Telegram_logo.svg.png" alt="Telegram" className="w-10 h-10 object-contain flex-shrink-0" />
              <span>@parham_yakuza</span>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/parham.yakuza?igsh=MXY0cmFwbGgwc3EyaQ=="
              target="_blank"
              rel="noopener noreferrer"
              variants={connectCardVariants}
              whileHover={{ scale: 1.04 } as const}
              whileTap={{ scale: 0.96 }}
              className="
                flex items-center gap-5 p-6 rounded-2xl cursor-pointer
                bg-gray-900/60 backdrop-blur-md border border-pink-500/50
                shadow-xl shadow-pink-900/40 text-white text-lg font-medium
                hover:scale-[1.02] hover:shadow-pink-500/50 transition-all duration-300
              "
            >
              <img src="/Instagram_icon.png" alt="Instagram" className="w-10 h-10 object-contain flex-shrink-0" />
              <span>@parham.yakuza</span>
            </motion.a>

            <motion.button
              variants={fadeUp}
              whileTap={{ scale: 0.95 }}
              className="
                mt-10 px-10 py-4 text-lg font-bold
                bg-gray-800 hover:bg-gray-700
                border border-gray-600 rounded-full
                text-white transition-all duration-300 active:scale-95
              "
            >
              See you !
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;