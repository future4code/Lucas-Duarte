import { connection } from "..";

export default async function deleteFollowing(
  idFollower: string,
  idFollowed: string
): Promise<void> {
  await connection("cookenu_following")
    .where({ id_follower: idFollower, id_followed: idFollowed })
    .del();
}
