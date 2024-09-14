import randomColorGenerator from "../utils/randomColorGenerator";

export default function Tag({tag}) {
    const randomColor = randomColorGenerator()
  return (
    <li>
      <span className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]`}
        style={{ backgroundColor: randomColor }}>
        {tag}
      </span>
    </li>
  );
}
