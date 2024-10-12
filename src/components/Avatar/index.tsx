import { Avatar as MUIAvatar } from "@mui/material";

interface Props {
  mode?: "Text" | "Image";
  src?: string;
  alt?: string;
  text?: string;
}

export const Avatar = ({ alt, mode, src, text }: Props) => {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <>
      {mode === "Text" ? (
        <MUIAvatar {...stringAvatar(text ?? "No Avatar")} />
      ) : (
        <MUIAvatar alt={alt} src={src} />
      )}
    </>
  );
};
