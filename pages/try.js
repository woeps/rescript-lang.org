import dynamic from "next/dynamic";

const Playground = dynamic(() => import("../re_pages/Playground.bs"), {
  ssr: false,
  //loading: () => <div> Loading... </div>
});

function Try() {
  return <Playground />;
}

export default Try;
