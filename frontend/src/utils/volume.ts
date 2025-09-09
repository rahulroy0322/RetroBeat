import { minMax } from "./lib";

type ComputeVolPropsType = {
  element: DOMRect;
  page: {
    x: number;
    y: number;
  };
};

const computeVol = ({ element, page: { x, y } }: ComputeVolPropsType) => {
  const {
    left: knobPositionX,
    top: knobPositionY,
    width: knobWidth,
    height: knobHeight,
  } = element;
  const centerX = knobWidth / 2 + knobPositionX,
    centerY = knobHeight / 2 + knobPositionY;

  const oneSide = centerX - x,
    otherSide = centerY - y,
    currentRadiansAngle = Math.atan2(oneSide, otherSide),
    getRadiansInDegrees = (currentRadiansAngle * 180) / Math.PI,
    finalAngleInDegrees = -(getRadiansInDegrees - 135);

  const finalAngle = minMax(finalAngleInDegrees, 270);

  return [
    minMax(Math.floor(finalAngleInDegrees / (270 / 100)), 100),
    finalAngle,
  ];
};
export{
    computeVol
}