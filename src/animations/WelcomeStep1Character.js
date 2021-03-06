import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

/*
Step 1 - duplicate file
Step 2 - change file name and function name to a new name
Step 3 - replace svg with copied code from the svg file
Step 4 - remove width and height from svg element
Step 5 - add animations. Add motion. in front of any path that needs
animating and make sure you have initial, animate, and transition attributes.
More info on animating here: https://www.framer.com/api/motion/
Step 6 - Import this file into the level that you want to use it in.
Step 7 - if you ever want to tweak the animation, come back and change this file.
*/

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    height: "100%"
  },
  svg: {
    display: "block",
    position: "absolute",
    maxHeight: "100%",
  },
});

export default function WelcomeStep1Character(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 646 164.872" preserveAspectRatio="xMidYMin" >
        <g id="Group_1631" data-name="Group 1631" transform="translate(-60 -287.128)">
          <g id="Group_1590" data-name="Group 1590" transform="translate(0 18)">
            <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="wire" data-name="Path 531" d="M2882.931-2279.389c25.375,0,25.375,32.513,50.749,32.513s25.375-32.513,50.751-32.513,25.375,32.513,50.75,32.513,25.375-32.513,50.751-32.513,25.376,32.513,50.751,32.513,25.375-32.513,50.752-32.513,25.376,32.513,50.753,32.513,25.377-32.513,50.753-32.513" transform="translate(-2660.465 2630.129)" fill="none" stroke="#182a74" strokeMiterlimit="10" strokeWidth="1"/>
            <g id="Group_1585" data-name="Group 1585">
              <g id="Group_1586" data-name="Group 1586">
                <g id="Group_1580" data-name="Group 1580" transform="translate(0 -63)">
                  <g id="Group_1571" data-name="Group 1571" transform="translate(20 -81)">
                    <g id="Group_1566" data-name="Group 1566" transform="translate(-22 58.641)">
                      <rect id="Rectangle_300" data-name="Rectangle 300" width="260" height="139" rx="69.5" transform="translate(62 380.36)" fill="#182a74"/>
                      <g id="Group_1563" data-name="Group 1563" transform="translate(61.999 380)">
                        <path id="Path_530" data-name="Path 530" d="M69.5,0A69.5,69.5,0,1,1,0,69.5,69.5,69.5,0,0,1,69.5,0Z" transform="translate(0.001 0.36)" fill="#04bf8a"/>
                        <g id="Group_1404" data-name="Group 1404" transform="translate(28.639 30.139)">
                          <g id="nose" data-name="Group 194" transform="translate(31.14 29.373)">
                            <motion.g id="noserotate" initial={{rotate: 0}} animate={{rotate: 3600}} transition={{duration: 10, delay: 2, flip: Infinity }} >
                              <g id="Group_192" data-name="Group 192">
                                <path id="Path_97" data-name="Path 97" d="M473.064,752.236V742.109h0a10.127,10.127,0,0,0-10.124,10.127h10.126Z" transform="translate(-462.938 -742.109)"/>
                                <path id="Path_98" data-name="Path 98" d="M504.932,773.978H494.806V784.1A10.126,10.126,0,0,0,504.932,773.978Z" transform="translate(-484.68 -763.852)"/>
                              </g>
                              <g id="Group_193" data-name="Group 193" transform="translate(0 0)">
                                <path id="Path_99" data-name="Path 99" d="M494.806,752.236h10.126v0a10.126,10.126,0,0,0-10.126-10.124h0Z" transform="translate(-484.68 -742.11)" fill="#fff"/>
                                <path id="Path_100" data-name="Path 100" d="M473.065,784.1V773.978H462.939A10.126,10.126,0,0,0,473.065,784.1Z" transform="translate(-462.939 -763.852)" fill="#fff"/>
                              </g>
                            </motion.g>
                          </g>
                          <g id="Group_195" data-name="Group 195" transform="translate(16.565 0)">
                            <g id="Group_119" data-name="Group 119" transform="translate(0)">
                              <path id="Path_72" data-name="Path 72" d="M516.115,359.717c-6.138,0-9.814-3.12-9.814-6.969s3.676-6.969,9.814-6.969h0c6.138,0,9.814,3.12,9.814,6.969s-3.676,6.969-9.814,6.969Z" transform="translate(-506.301 -345.78)" fill="#fff"/>
                              <circle id="Ellipse_15" data-name="Ellipse 15" cx="3.995" cy="3.995" r="3.995" transform="translate(5.819 2.973)"/>
                            </g>
                            <g id="Group_120" data-name="Group 120" transform="translate(30.032)">
                              <path id="Path_73" data-name="Path 73" d="M621.672,359.717c-6.138,0-9.814-3.12-9.814-6.969s3.675-6.969,9.814-6.969h0c6.138,0,9.814,3.12,9.814,6.969s-3.676,6.969-9.814,6.969Z" transform="translate(-611.858 -345.78)" fill="#fff"/>
                              <circle id="Ellipse_16" data-name="Ellipse 16" cx="3.995" cy="3.995" r="3.995" transform="translate(5.818 2.973)"/>
                            </g>
                          </g>
                          <g id="Group_1401" data-name="Group 1401" transform="translate(0 62.102)">
                            <g id="Group_1266" data-name="Group 1266" transform="translate(0 0)">
                              <g id="Group_684-2" data-name="Group 684-2" transform="translate(0 0)">
                                <g id="Group_675-2" data-name="Group 675-2">
                                  <path id="Ellipse_71-2-2" data-name="Ellipse 71-2-2" d="M13.087,0A13.087,13.087,0,1,1,0,13.087,13.087,13.087,0,0,1,13.087,0Z" fill="#fff"/>
                                  <line id="Line_230" data-name="Line 230" x2="6.991" transform="translate(9.692 13.187)" fill="none" stroke="#182a74" strokeWidth="1"/>
                                </g>
                                <g id="Group_676-2" data-name="Group 676-2" transform="translate(56.365)">
                                  <circle id="Ellipse_72" data-name="Ellipse 72" cx="13.087" cy="13.087" r="13.087" fill="#fff"/>
                                  <line id="Line_228" data-name="Line 228" x2="6.991" transform="translate(9.569 13.187)" fill="none" stroke="#182a74" strokeWidth="1"/>
                                  <line id="Line_229" data-name="Line 229" x2="6.991" transform="translate(13.064 9.692) rotate(90)" fill="none" stroke="#182a74" strokeWidth="1"/>
                                </g>
                              </g>
                              <g id="Group_1258" data-name="Group 1258" transform="translate(30.556 11.486)">
                                <path id="Path_460" data-name="Path 460" d="M465.631,241.825a1.922,1.922,0,0,1,2.718,0" transform="translate(-446.923 -241.262)" fill="rgba(0,0,0,0)" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                                <path id="Path_461" data-name="Path 461" d="M406.754,241.825a1.922,1.922,0,0,1,2.719,0" transform="translate(-406.754 -241.262)" fill="rgba(0,0,0,0)" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                                <path id="Path_462" data-name="Path 462" d="M429.771,242.149c0,2.665-3.106,7.268-9.37,7.268s-9.37-4.6-9.37-7.268" transform="translate(-409.673 -241.867)" fill="rgba(0,0,0,0)" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id="Group_1564" data-name="Group 1564" transform="translate(242.541 411.789)">
                        <path id="Path_74" data-name="Path 74" d="M580.4,178.031" transform="translate(-551.408 -174.133)" fill="#fff"/>
                        <path id="Path_75" data-name="Path 75" d="M590.588,178.031" transform="translate(-569.384 -174.133)" fill="#fff"/>
                        <path id="Path_76" data-name="Path 76" d="M598.094,184.669l-.131-3.71a3.6,3.6,0,1,0-7.2,0v1.268l-.079-5.7a3.6,3.6,0,1,0-7.2,0L583.4,178.1a3.6,3.6,0,0,0-7.2,0s.761,26.289-.911,30.553c-1.976,5.037-3.66,2.71-7.3-.986-1.654-1.679-4.41-3.915-6.032-.395-.755,1.637.7,5.153,3.994,8.859,5.27,5.928,10.539,9.248,10.539,15.043v4.953s.331,10.942,12.425,10.942,13.01-10.942,13.01-10.942c0-23.035,3.063-15.942,3.063-32.142,0-6.586-.407-14.422-.407-14.422a3.229,3.229,0,0,0-3.181-3.18,3.18,3.18,0,0,0-3.18,3.18l-.116,1.128Z" transform="translate(-561.75 -172.926)" fill="#fff"/>
                        <line id="Line_31" data-name="Line 31" y2="26.754" transform="translate(21.613 11.535)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                        <line id="Line_32" data-name="Line 32" y2="24.852" transform="translate(28.988 14.59)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                        <line id="Line_33" data-name="Line 33" y2="18.551" transform="translate(36.343 23.198)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <motion.g initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 2.5 }} id="Group_1589" data-name="Group 1589" transform="translate(66.467 19)">
              <g id="Group_1587" data-name="Group 1587" transform="translate(46.92 -138.602)">
                <g id="Group_1575" data-name="Group 1575" transform="translate(515 435)">
                  <g id="Group_1578" data-name="Group 1578">
                    <path id="Rectangle_303" data-name="Rectangle 303" d="M15.314,0h36a0,0,0,0,1,0,0V36.163a0,0,0,0,1,0,0h-36A15.314,15.314,0,0,1,0,20.849V15.314A15.314,15.314,0,0,1,15.314,0Z" transform="translate(0 18.102)" fill="none" stroke="#182a74" strokeMiterlimit="10" strokeWidth="1.134"/>
                    <g id="Group_1577" data-name="Group 1577" transform="translate(0 0.402)">
                      <line id="Line_251" data-name="Line 251" x2="26.295" transform="translate(51.318 28.199)" fill="none" stroke="#182a74" strokeMiterlimit="10" strokeWidth="1.134"/>
                      <line id="Line_252" data-name="Line 252" x2="26.295" transform="translate(51.318 44.199)" fill="none" stroke="#182a74" strokeMiterlimit="10" strokeWidth="1.134"/>
                    </g>
                  </g>
                </g>
              </g>
              <g id="Group_1588" data-name="Group 1588" transform="translate(-1 1)">
                <g id="Group_1582" data-name="Group 1582" transform="translate(18636.375 23937.643)">
                  <g id="Group_1560" data-name="Group 1560" transform="translate(-18031.057 -23624.814)">
                    <path id="Path_459" data-name="Path 459" d="M295.959,296.269" transform="translate(-295.959 -296.269)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                  </g>
                  <ellipse id="Ellipse_115-3" data-name="Ellipse 115-3" cx="2.587" cy="3.469" rx="2.587" ry="3.469" transform="translate(-18035.17 -23615.246)" fill="#182a74"/>
                  <ellipse id="Ellipse_115-4" data-name="Ellipse 115-4" cx="2.587" cy="3.469" rx="2.587" ry="3.469" transform="translate(-18052.287 -23615.246)" fill="#182a74"/>
                </g>
                <g id="Group_1583" data-name="Group 1583" transform="translate(-2 -7)">
                  <path id="eyebrow1" data-name="Path 457" d="M0,0A5.981,5.981,0,0,1,5.981,5.981" transform="matrix(0.966, -0.259, 0.259, 0.966, 604.908, 310.096)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                  <path id="eyebrow2" data-name="Path 458" d="M280,287.2a5.982,5.982,0,0,1,8.459-.009l.009.009" transform="translate(195.342 205.315) rotate(-30)" fill="none" stroke="#182a74" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/>
                </g>
              </g>
            </motion.g>
          </g>
          <g id="Group_1591" data-name="Group 1591" transform="translate(1120.498 -218.805)">
            <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="flower_head" data-name="Path 532" d="M-616.98,533.516h-13.04l9.221-9.221a5.789,5.789,0,0,0,0-8.187h0a5.789,5.789,0,0,0-8.187,0l-9.22,9.22v-13.04A5.789,5.789,0,0,0-644,506.5h0a5.789,5.789,0,0,0-5.789,5.789v13.04l-9.22-9.221a5.79,5.79,0,0,0-8.187,0,5.789,5.789,0,0,0,0,8.187l9.221,9.221h-13.04a5.789,5.789,0,0,0-5.789,5.789,5.789,5.789,0,0,0,5.789,5.789h13.04l-9.221,9.221a5.789,5.789,0,0,0,0,8.187,5.789,5.789,0,0,0,8.187,0l9.221-9.221v13.04A5.789,5.789,0,0,0-644,572.111a5.789,5.789,0,0,0,5.789-5.789v-13.04l9.22,9.22a5.789,5.789,0,0,0,8.187,0,5.789,5.789,0,0,0,0-8.187l-9.22-9.22h13.04a5.789,5.789,0,0,0,5.789-5.789A5.789,5.789,0,0,0-616.98,533.516Z" transform="translate(0 0)" fill="none" stroke="#182a74" strokeMiterlimit="10" strokeWidth="1.134"/>
            <motion.circle initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 2.5 }} id="flower_middle" data-name="Ellipse 132" cx="8.911" cy="8.911" r="8.911" transform="translate(-652.908 530.394)" fill="none" stroke="#182a74" strokeMiterlimit="10" strokeWidth="1.134"/>
          </g>
          <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 2, delay: 1 }} id="flower_root" data-name="Line 253" d="M0 0, L0, 47" transform="translate(476.5 353.5)" fill="none" stroke="#182a74" strokeWidth="1"/>
        </g>
      </svg>

    </div>
  );
}
