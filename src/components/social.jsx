const socials = [
  //   {
  //     logo: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
  //     link: "https://github.com/shilpabijalwan",
  //   },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/2504/2504923.png",
    link: "https://www.linkedin.com/in/shilpabijalwan01/",
  },
];

export default function Socials() {
  return (
    <div className="fixed bottom-7 left-6 z-50 flex flex-col gap-5">
      {socials.map((s, index) => (
        <div
          key={index}
          className="w-10 transition-transform duration-500 hover:rotate-[360deg] hover:scale-y-110"
        >
          <a href={s.link} target="_blank" rel="noopener noreferrer">
            <img src={s.logo} alt="social" className="w-full" />
          </a>
        </div>
      ))}
    </div>
  );
}
