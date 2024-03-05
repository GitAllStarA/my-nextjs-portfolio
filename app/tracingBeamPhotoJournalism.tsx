import { useRouter } from "next/router";
import { TracingBeamDemo } from "./TracingBeamDemo";

const TracingBeamPhotoJournalism = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/tracingBeamDemo");
  };

  return (
    <div onClick={handleClick}>
      <TracingBeamDemo />
    </div>
  );
};

export default TracingBeamPhotoJournalism;
