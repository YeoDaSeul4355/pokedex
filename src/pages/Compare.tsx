import React from "react";
import Wrapper from "../sections/Wrapper";
import { useAppSelector } from "../app/hooks";
import CompareComtainer from "../components/CompareComtainer";

function Compare() {
  const { compareQueue } = useAppSelector(({ pokemon }) => pokemon);
  return (
    <div className="compare">
      <CompareComtainer
        pokemon={compareQueue[0]}
        isEmpty={compareQueue.length < 1}
      />
      <CompareComtainer
        pokemon={compareQueue[1]}
        isEmpty={compareQueue.length < 2}
      />
    </div>
  );
}

export default Wrapper(Compare);
