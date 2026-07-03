import { useQuery } from "@tanstack/react-query";
import type { GitHubRepo } from "../types";

const username = "noctrlzdave";

const fetchRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
  );

  if (!response.ok) {
    throw new Error("Unable to fetch repositories right now.");
  }

  const data = (await response.json()) as GitHubRepo[];

  return data
    .filter((repo) => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 8);
};

export function useGitHubRepos() {
  return useQuery({
    queryKey: ["github-repos", username],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
}
