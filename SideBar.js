import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faShare,
  faHeartCircleCheck,
  faBookmark,
  faTimesCircle,
  faPaperPlane,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUserCircle } from "@fortawesome/free-regular-svg-icons";
function SideBar() {
  const [isLiked, setIsliked] = React.useState(false);
  const [isLike, setIslike] = React.useState(false);
  const [isComment, setIsComment] = React.useState(false);
  const [isShare, setIsShare] = React.useState(false);
  const [isSave, setIsSave] = React.useState(false);
  // const [countLike, setCountLike] = React.useState(0);
  const [comment, setComment] = React.useState("");
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };
  const [comments, setComments] = React.useState([]);
  const sendComment = () => {
    setComments((comments) => [...comments, comment]);
  };

  const Like = () => {
    setIsliked(!isLiked);
  };
  const Likes = () => {
    setIslike(!isLike);
  };
  const Comment = () => {
    setIsComment(!isComment);
  };
  const CommentClose = () => {
    setIsComment(!isComment);
  };
  const Share = () => {
    setIsShare(!isShare);
  };
  const ShareClose = () => {
    setIsShare(!isShare);
  };
  const Save = () => {
    setIsSave(!isSave);
  };
  const styleLiked = {
    color: isLiked ? " rgb(235, 57, 57)" : "rgb(215, 224, 224)",
  };
  const styleLike = {
    color: isLike ? " rgb(235, 57, 57)" : "rgb(156, 161, 161)",
    cursor: "pointer",
    position: "relative",
    right: "20px",
  };
  const styleSaved = {
    color: isSave ? " rgb(241, 238, 20)" : "rgb(215, 224, 224)",
  };
  const styleComment = {
    display: isComment ? "flex" : "none",
    top: isComment ? "-330px" : "100px",
  };
  const styleShare = {
    display: isShare ? "flex" : "none",
    top: isShare ? "-330px" : "100px",
  };
  return (
    <div className="side">
      <section className="sidebar">
        <div className="sidebar-icon">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="sidebar-icons avatar"
          />
        </div>
        <div className="sidebar-icon">
          <FontAwesomeIcon
            icon={isLiked ? faHeartCircleCheck : faHeart}
            onClick={Like}
            className="sidebar-icons"
            style={styleLiked}
          />
        </div>
        <div className="sidebar-icon">
          <FontAwesomeIcon
            icon={faCommentDots}
            onClick={Comment}
            className="sidebar-icons"
          />
        </div>

        <div className="sidebar-icon">
          <FontAwesomeIcon
            icon={faBookmark}
            onClick={Save}
            className="sidebar-icons"
            style={styleSaved}
          />
        </div>
        <div className="sidebar-icon">
          <FontAwesomeIcon
            icon={faShare}
            onClick={Share}
            className="sidebar-icons"
          />
        </div>
      </section>

      <div className="comment" style={styleComment}>
        <div className="comments">
          <div className="comments-text">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span>Tìm kiếm: TraXuan là ai ?...</span>
          </div>
          <FontAwesomeIcon icon={faTimesCircle} onClick={CommentClose} />
        </div>
        <div className="comment-side">
          {comments.map((text) => (
            <div className="cmt">
              <div className="user-cmt">1</div>
              {text}
              <FontAwesomeIcon
                icon={isLike ? faHeartCircleCheck : faHeart}
                style={styleLike}
                onClick={Likes}
              />
            </div>
          ))}
          <div className="cmt-side">
            <input
              className="write-comment"
              placeholder="Write your commnent..."
              value={comment}
              onChange={onChangeHandler}
            />
            <button className="send-comment">
              <FontAwesomeIcon icon={faPaperPlane} onClick={sendComment} />
            </button>
          </div>
        </div>
      </div>
      <div className="comment" style={styleShare}>
        <div className="comments">
          <FontAwesomeIcon icon={faTimesCircle} onClick={ShareClose} />
        </div>
        <div className="comment-side">
          <div className="cmt">this is share</div>
          <div className="cmt-side">
            <input
              className="write-comment"
              placeholder="Write your commnent..."
            />
            <button className="send-comment">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
