import PropTypes from "prop-types";
import styles from '../styles/YoutubeEmbed.module.css'

const YoutubeEmbed = () => (
<div className={styles.video_responsive}>
<iframe width="908" height="681" src="https://www.youtube.com/embed/Ck0oorcP8yo" title="Mediterranean Nights - Azure" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
