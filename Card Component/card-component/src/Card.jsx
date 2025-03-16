import profilePic from './assets/circle-img.png'

function Card() {
  return (
    <div class="bg-[#2b2b2b] text-white font-poppins flex justify-center items-center h-screen">
      <div class="md:ThreeD-movement w-[343px] h-[620px] bg-[#191919] rounded-[20px] flex flex-col gap-6 items-center py-10 hover:scale-110 transition duration-300 ease-in-out">
        <div class="flex flex-col items-center gap-6">
          <div class="w-[134px]">
            <img src={profilePic} alt="" class="" />
          </div>
          <div class="text-center">
            <h1 class="uppercase text-[25px] font-semibold">
              Senith Vijayantha
            </h1>
            <p class="text-[#53E123] text-[16px] font-medium">
              Kegalle, Sri Lanka
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <button class="btn">
            <a
              href="https://github.com/SenithVijayantha"
              target="_blank"
              class="block w-full"
            >
              GitHub
            </a>
          </button>
          <button class="btn">
            <a
              href="https://www.linkedin.com/in/senith-vijayantha-380974260/"
              target="_blank"
              class="block w-full"
            >
              LinkedIn
            </a>
          </button>
          <button class="btn">
            <a
              href="https://www.facebook.com/ssvsenith/"
              target="_blank"
              class="block w-full"
            >
              Facebook
            </a>
          </button>
          <button class="btn">
            <a
              href="https://www.instagram.com/master_senith/"
              target="_blank"
              class="block w-full"
            >
              Instagram
            </a>
          </button>
          <button class="btn">
            <a
              href="https://twitter.com/SenithSV"
              target="_blank"
              class="block w-full"
            >
              Twitter
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
