enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event"
}

type CreatePostInput = {
  photo: string;
  description: string;
  type: string;
};

class Post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private type: string,
    private authorId: string
  ) {
    if (type.toLowerCase() === POST_TYPES.NORMAL) {
      this.type = POST_TYPES.NORMAL;
    } else if (type.toLowerCase() === POST_TYPES.EVENT) {
      this.type = POST_TYPES.EVENT;
    } else {
      throw new Error("Post type is not valid");
    }
  }

  public getId = (): string => this.id;
  public getPhoto = (): string => this.photo;
  public getDescription = (): string => this.description;
  public getType = (): string => this.type;
  public getAuthorId = (): string => this.authorId;
}

export { POST_TYPES, Post, CreatePostInput };
