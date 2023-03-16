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
  faDownload,
  faListDots,
  faUserAstronaut,
  faUserNinja,
  faCat,
  faDog,
  faUserTie,
  faFish,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faSave,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookMessenger,
  faFacebook,
  faTwitter,
  faInstagram,
  faAppStore,
  faTumblr,
} from "@fortawesome/free-brands-svg-icons";
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
    color: isLiked ? " rgb(235, 57, 57)" : " rgb(250, 252, 252)",
  };
  const styleLike = {
    color: isLike ? " rgb(235, 57, 57)" : "rgb(156, 161, 161)",
    cursor: "pointer",
    position: "relative",
    right: "20px",
  };
  const styleSaved = {
    color: isSave ? " rgb(241, 238, 20)" : " rgb(250, 252, 252)",
  };
  const styleComment = {
    display: isComment ? "flex" : "none",
    top: isComment ? "-330px" : "100px",

    height: isComment ? "400px" : "0px",
  };
  const styleShare = {
    display: isShare ? "flex" : "none",
    top: isShare ? "-250px" : "100px",
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
            className="sidebar-icons ccc"
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

      <div className="comment cmts" style={styleComment}>
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
              <div className="user-cmt"></div>
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
      <div className="comment sharee" style={styleShare}>
        <div className="comments">
          <FontAwesomeIcon icon={faTimesCircle} onClick={ShareClose} />
        </div>
        <div className="share">
          <div className="share-ele">
            <span className="share-span">Friends</span>
            <div className="share-opts">
              <div className="option-icon">
                <FontAwesomeIcon icon={faUserAstronaut} className="avt1" />
              </div>
              <div className="option-icon">
                <FontAwesomeIcon icon={faUserNinja} className="avt2" />
              </div>
              <div className="option-icon">
                <FontAwesomeIcon icon={faCat} className="avt3" />
              </div>
              <div className="option-icon">
                <FontAwesomeIcon icon={faDog} className="avt4" />
              </div>
              <div className="option-icon">
                <FontAwesomeIcon icon={faUserTie} className="avt5" />
              </div>
              <div className="option-icon">
                <FontAwesomeIcon icon={faFish} className="avt6" />
              </div>
            </div>
          </div>
          <div className="share-ele">
            <span className="share-span">Another Apps</span>
            <div className="share-opts">
              <div className="option-icon">
                <FontAwesomeIcon icon={faFacebookMessenger} />
              </div>
              <div className="option-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="option-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="option-icon">
                <FontAwesomeIcon icon={faAppStore} />
              </div>
              <div className="option-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="option-icon">
                <FontAwesomeIcon icon={faTumblr} />
              </div>
            </div>
          </div>
          <div className="share-ele">
            <span className="share-span">More</span>
            <div className="share-opts">
              <div className="option-icon op1">
                <FontAwesomeIcon icon={faSave} className="op op1" />
              </div>
              <div className="option-icon op1">
                <FontAwesomeIcon icon={faDownload} className="op op2" />
              </div>
              <div className="option-icon op1">
                <FontAwesomeIcon icon={faListDots} className="op op3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
