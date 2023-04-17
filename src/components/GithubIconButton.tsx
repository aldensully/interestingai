import GithubIcon from "./GithubIcon";

const GithubIconButton = ({ url }: { url: string; }) => {
  return (
    <a href={url}>
      <GithubIcon />
    </a>
  );
};

export default GithubIconButton;