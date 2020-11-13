import { connection } from "..";

export default async function insertFollowing(
  idFollower: string,
  idFollowed: string
): Promise<void> {
  await connection("cookenu_following").insert({
    id_follower: idFollower,
    id_followed: idFollowed
  });
}
