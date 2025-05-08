const DIRECTIONS = {
  left: "left",
  right: "right",
} as const;

type Direction = keyof typeof DIRECTIONS;

interface StageIconProps {
  size: number;
  src: string;
}

interface StageProps extends StageIconProps {
  title: string;
}

export { DIRECTIONS };
export type { Direction, StageIconProps, StageProps };
