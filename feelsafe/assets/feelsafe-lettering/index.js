import React from "react";
import { SvgXml } from "react-native-svg";
import { RFValue } from "react-native-responsive-fontsize";

const FeelSafe = (props) => {
	const svg =
		'<svg xmlns="http://www.w3.org/2000/svg" width="142" height="31" viewBox="0 0 142 31" fill="none"><path d="M4.60971 30.5557V13.8957L3.00971 13.6157C2.59638 13.5357 2.25638 13.389 1.98971 13.1757C1.73638 12.9623 1.60971 12.6557 1.60971 12.2557V10.0557H4.60971V8.69566C4.60971 7.52233 4.78971 6.46233 5.14971 5.51566C5.52305 4.55566 6.04971 3.749 6.72971 3.09566C7.40971 2.429 8.24305 1.91566 9.22971 1.55566C10.2164 1.19566 11.3297 1.01566 12.5697 1.01566C13.0497 1.01566 13.503 1.049 13.9297 1.11566C14.3697 1.169 14.8097 1.25566 15.2497 1.37566L15.1297 4.09566C15.103 4.509 14.923 4.78233 14.5897 4.91566C14.2697 5.03566 13.9097 5.09566 13.5097 5.09566C12.9497 5.09566 12.443 5.15566 11.9897 5.27566C11.5497 5.39566 11.1764 5.60233 10.8697 5.89566C10.563 6.17566 10.3297 6.56233 10.1697 7.05566C10.0097 7.53566 9.92971 8.13566 9.92971 8.85566V10.0557H15.0497V13.8957H10.1097V30.5557H4.60971ZM30.2131 17.8157C30.2131 17.2423 30.1331 16.6957 29.9732 16.1757C29.8265 15.6557 29.5865 15.1957 29.2531 14.7957C28.9198 14.3957 28.4998 14.0823 27.9931 13.8557C27.4865 13.6157 26.8798 13.4957 26.1732 13.4957C24.8531 13.4957 23.8198 13.869 23.0731 14.6157C22.3265 15.3623 21.8398 16.429 21.6132 17.8157H30.2131ZM21.5331 21.0957C21.7065 23.029 22.2531 24.4423 23.1731 25.3357C24.1065 26.229 25.3198 26.6757 26.8132 26.6757C27.5732 26.6757 28.2265 26.589 28.7732 26.4157C29.3332 26.229 29.8198 26.029 30.2332 25.8157C30.6598 25.589 31.0398 25.389 31.3732 25.2157C31.7198 25.029 32.0598 24.9357 32.3932 24.9357C32.8198 24.9357 33.1532 25.0957 33.3932 25.4157L34.9932 27.4157C34.4065 28.0957 33.7598 28.6623 33.0531 29.1157C32.3465 29.5557 31.6132 29.909 30.8531 30.1757C30.0931 30.429 29.3265 30.6023 28.5532 30.6957C27.7798 30.8023 27.0331 30.8557 26.3131 30.8557C24.8731 30.8557 23.5265 30.6223 22.2731 30.1557C21.0331 29.6757 19.9465 28.9757 19.0131 28.0557C18.0931 27.1223 17.3665 25.969 16.8331 24.5957C16.2998 23.2223 16.0331 21.629 16.0331 19.8157C16.0331 18.4157 16.2598 17.0957 16.7131 15.8557C17.1798 14.6157 17.8465 13.5357 18.7131 12.6157C19.5798 11.6957 20.6331 10.969 21.8731 10.4357C23.1131 9.889 24.5132 9.61566 26.0732 9.61566C27.3932 9.61566 28.6065 9.829 29.7132 10.2557C30.8331 10.669 31.7931 11.2757 32.5931 12.0757C33.4065 12.8757 34.0332 13.8623 34.4732 15.0357C34.9265 16.1957 35.1532 17.5223 35.1532 19.0157C35.1532 19.429 35.1332 19.769 35.0932 20.0357C35.0532 20.3023 34.9865 20.5157 34.8932 20.6757C34.7998 20.8357 34.6732 20.949 34.5132 21.0157C34.3532 21.069 34.1465 21.0957 33.8931 21.0957H21.5331ZM51.6585 17.8157C51.6585 17.2423 51.5785 16.6957 51.4185 16.1757C51.2718 15.6557 51.0318 15.1957 50.6985 14.7957C50.3651 14.3957 49.9451 14.0823 49.4385 13.8557C48.9318 13.6157 48.3251 13.4957 47.6185 13.4957C46.2985 13.4957 45.2651 13.869 44.5185 14.6157C43.7718 15.3623 43.2851 16.429 43.0585 17.8157H51.6585ZM42.9785 21.0957C43.1518 23.029 43.6985 24.4423 44.6185 25.3357C45.5518 26.229 46.7651 26.6757 48.2585 26.6757C49.0185 26.6757 49.6718 26.589 50.2185 26.4157C50.7785 26.229 51.2651 26.029 51.6785 25.8157C52.1051 25.589 52.4851 25.389 52.8185 25.2157C53.1651 25.029 53.5051 24.9357 53.8385 24.9357C54.2651 24.9357 54.5985 25.0957 54.8385 25.4157L56.4385 27.4157C55.8518 28.0957 55.2051 28.6623 54.4985 29.1157C53.7918 29.5557 53.0585 29.909 52.2985 30.1757C51.5385 30.429 50.7718 30.6023 49.9985 30.6957C49.2251 30.8023 48.4785 30.8557 47.7585 30.8557C46.3185 30.8557 44.9718 30.6223 43.7185 30.1557C42.4785 29.6757 41.3918 28.9757 40.4585 28.0557C39.5385 27.1223 38.8118 25.969 38.2785 24.5957C37.7451 23.2223 37.4785 21.629 37.4785 19.8157C37.4785 18.4157 37.7051 17.0957 38.1585 15.8557C38.6251 14.6157 39.2918 13.5357 40.1585 12.6157C41.0251 11.6957 42.0785 10.969 43.3185 10.4357C44.5585 9.889 45.9585 9.61566 47.5185 9.61566C48.8385 9.61566 50.0518 9.829 51.1585 10.2557C52.2785 10.669 53.2385 11.2757 54.0385 12.0757C54.8518 12.8757 55.4785 13.8623 55.9185 15.0357C56.3718 16.1957 56.5985 17.5223 56.5985 19.0157C56.5985 19.429 56.5785 19.769 56.5385 20.0357C56.4985 20.3023 56.4318 20.5157 56.3385 20.6757C56.2451 20.8357 56.1185 20.949 55.9585 21.0157C55.7985 21.069 55.5918 21.0957 55.3385 21.0957H42.9785ZM65.5838 0.735663V30.5557H60.0638V0.735663H65.5838ZM83 14.1757C82.8534 14.4023 82.7 14.569 82.54 14.6757C82.3934 14.769 82.1867 14.8157 81.92 14.8157C81.6534 14.8157 81.38 14.749 81.1 14.6157C80.82 14.4823 80.5067 14.3423 80.16 14.1957C79.8134 14.0357 79.4134 13.889 78.96 13.7557C78.52 13.6223 78.0067 13.5557 77.42 13.5557C76.5267 13.5557 75.8334 13.7423 75.34 14.1157C74.8467 14.4757 74.6 14.9557 74.6 15.5557C74.6 15.969 74.74 16.3157 75.02 16.5957C75.3 16.8757 75.6667 17.1223 76.12 17.3357C76.5867 17.5357 77.1134 17.729 77.7 17.9157C78.2867 18.089 78.8867 18.2823 79.5 18.4957C80.1267 18.709 80.7334 18.9557 81.32 19.2357C81.9067 19.5157 82.4267 19.869 82.88 20.2957C83.3467 20.709 83.72 21.2157 84 21.8157C84.28 22.4023 84.42 23.1157 84.42 23.9557C84.42 24.9557 84.2334 25.8823 83.86 26.7357C83.5 27.5757 82.9667 28.3023 82.26 28.9157C81.5534 29.529 80.6734 30.009 79.62 30.3557C78.5667 30.7023 77.3534 30.8757 75.98 30.8757C75.2734 30.8757 74.5734 30.809 73.88 30.6757C73.1867 30.5557 72.5267 30.3823 71.9 30.1557C71.2734 29.9157 70.6867 29.6423 70.14 29.3357C69.5934 29.029 69.12 28.6957 68.72 28.3357L70 26.2757C70.1467 26.0357 70.3267 25.849 70.54 25.7157C70.7667 25.5823 71.0534 25.5157 71.4 25.5157C71.7334 25.5157 72.04 25.6023 72.32 25.7757C72.6 25.9357 72.9134 26.1157 73.26 26.3157C73.6067 26.5023 74.0134 26.6823 74.48 26.8557C74.96 27.0157 75.5534 27.0957 76.26 27.0957C76.7934 27.0957 77.2534 27.0357 77.64 26.9157C78.0267 26.7957 78.34 26.6357 78.58 26.4357C78.82 26.2223 78.9934 25.989 79.1 25.7357C79.22 25.469 79.28 25.1957 79.28 24.9157C79.28 24.4623 79.1334 24.0957 78.84 23.8157C78.56 23.5223 78.1867 23.269 77.72 23.0557C77.2667 22.8423 76.74 22.649 76.14 22.4757C75.54 22.3023 74.9267 22.109 74.3 21.8957C73.6867 21.6823 73.08 21.429 72.48 21.1357C71.8934 20.8423 71.3667 20.4757 70.9 20.0357C70.4467 19.5823 70.0734 19.029 69.78 18.3757C69.5 17.7223 69.36 16.929 69.36 15.9957C69.36 15.1423 69.5267 14.3357 69.86 13.5757C70.1934 12.8023 70.6934 12.1223 71.36 11.5357C72.0267 10.949 72.8534 10.4823 73.84 10.1357C74.84 9.789 75.9934 9.61566 77.3 9.61566C78.7667 9.61566 80.1 9.85566 81.3 10.3357C82.5 10.8157 83.4867 11.4423 84.26 12.2157L83 14.1757ZM98.6553 21.9357C97.3087 22.0023 96.1887 22.1223 95.2953 22.2957C94.402 22.4557 93.6887 22.669 93.1553 22.9357C92.6353 23.2023 92.262 23.509 92.0353 23.8557C91.822 24.189 91.7153 24.5557 91.7153 24.9557C91.7153 25.7557 91.9353 26.3223 92.3753 26.6557C92.8287 26.989 93.4553 27.1557 94.2553 27.1557C95.1753 27.1557 95.9687 26.9957 96.6353 26.6757C97.3153 26.3423 97.9887 25.829 98.6553 25.1357V21.9357ZM87.4153 12.7957C88.6287 11.7023 89.9687 10.889 91.4353 10.3557C92.902 9.809 94.4887 9.53566 96.1953 9.53566C97.422 9.53566 98.5153 9.73566 99.4753 10.1357C100.449 10.5357 101.269 11.0957 101.935 11.8157C102.615 12.5223 103.135 13.369 103.495 14.3557C103.855 15.3423 104.035 16.4223 104.035 17.5957V30.5557H101.515C100.995 30.5557 100.595 30.4823 100.315 30.3357C100.049 30.189 99.8287 29.8823 99.6553 29.4157L99.2153 28.0957C98.6953 28.549 98.1887 28.949 97.6953 29.2957C97.2153 29.6423 96.7153 29.9357 96.1953 30.1757C95.6753 30.4023 95.1153 30.5757 94.5153 30.6957C93.9287 30.8157 93.2687 30.8757 92.5353 30.8757C91.6287 30.8757 90.802 30.7557 90.0553 30.5157C89.3087 30.2757 88.662 29.9223 88.1153 29.4557C87.582 28.9757 87.1687 28.3823 86.8753 27.6757C86.582 26.969 86.4353 26.1557 86.4353 25.2357C86.4353 24.4757 86.6287 23.7157 87.0153 22.9557C87.402 22.1957 88.062 21.509 88.9953 20.8957C89.942 20.269 91.1953 19.7557 92.7553 19.3557C94.3287 18.9423 96.2953 18.709 98.6553 18.6557V17.5957C98.6553 16.3023 98.382 15.3557 97.8353 14.7557C97.2887 14.1423 96.502 13.8357 95.4753 13.8357C94.7153 13.8357 94.082 13.929 93.5753 14.1157C93.0687 14.289 92.622 14.4823 92.2353 14.6957C91.862 14.8957 91.5087 15.089 91.1753 15.2757C90.842 15.449 90.4553 15.5357 90.0153 15.5357C89.6287 15.5357 89.302 15.4423 89.0353 15.2557C88.782 15.0557 88.5687 14.8223 88.3953 14.5557L87.4153 12.7957ZM109.453 30.5557V13.8957L107.853 13.6157C107.44 13.5357 107.1 13.389 106.833 13.1757C106.58 12.9623 106.453 12.6557 106.453 12.2557V10.0557H109.453V8.69566C109.453 7.52233 109.633 6.46233 109.993 5.51566C110.367 4.55566 110.893 3.749 111.573 3.09566C112.253 2.429 113.087 1.91566 114.073 1.55566C115.06 1.19566 116.173 1.01566 117.413 1.01566C117.893 1.01566 118.347 1.049 118.773 1.11566C119.213 1.169 119.653 1.25566 120.093 1.37566L119.973 4.09566C119.947 4.509 119.767 4.78233 119.433 4.91566C119.113 5.03566 118.753 5.09566 118.353 5.09566C117.793 5.09566 117.287 5.15566 116.833 5.27566C116.393 5.39566 116.02 5.60233 115.713 5.89566C115.407 6.17566 115.173 6.56233 115.013 7.05566C114.853 7.53566 114.773 8.13566 114.773 8.85566V10.0557H119.893V13.8957H114.953V30.5557H109.453ZM135.057 17.8157C135.057 17.2423 134.977 16.6957 134.817 16.1757C134.67 15.6557 134.43 15.1957 134.097 14.7957C133.764 14.3957 133.344 14.0823 132.837 13.8557C132.33 13.6157 131.724 13.4957 131.017 13.4957C129.697 13.4957 128.664 13.869 127.917 14.6157C127.17 15.3623 126.684 16.429 126.457 17.8157H135.057ZM126.377 21.0957C126.55 23.029 127.097 24.4423 128.017 25.3357C128.95 26.229 130.164 26.6757 131.657 26.6757C132.417 26.6757 133.07 26.589 133.617 26.4157C134.177 26.229 134.664 26.029 135.077 25.8157C135.504 25.589 135.884 25.389 136.217 25.2157C136.564 25.029 136.904 24.9357 137.237 24.9357C137.664 24.9357 137.997 25.0957 138.237 25.4157L139.837 27.4157C139.25 28.0957 138.604 28.6623 137.897 29.1157C137.19 29.5557 136.457 29.909 135.697 30.1757C134.937 30.429 134.17 30.6023 133.397 30.6957C132.624 30.8023 131.877 30.8557 131.157 30.8557C129.717 30.8557 128.37 30.6223 127.117 30.1557C125.877 29.6757 124.79 28.9757 123.857 28.0557C122.937 27.1223 122.21 25.969 121.677 24.5957C121.144 23.2223 120.877 21.629 120.877 19.8157C120.877 18.4157 121.104 17.0957 121.557 15.8557C122.024 14.6157 122.69 13.5357 123.557 12.6157C124.424 11.6957 125.477 10.969 126.717 10.4357C127.957 9.889 129.357 9.61566 130.917 9.61566C132.237 9.61566 133.45 9.829 134.557 10.2557C135.677 10.669 136.637 11.2757 137.437 12.0757C138.25 12.8757 138.877 13.8623 139.317 15.0357C139.77 16.1957 139.997 17.5223 139.997 19.0157C139.997 19.429 139.977 19.769 139.937 20.0357C139.897 20.3023 139.83 20.5157 139.737 20.6757C139.644 20.8357 139.517 20.949 139.357 21.0157C139.197 21.069 138.99 21.0957 138.737 21.0957H126.377Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="0.829708" y1="30.4519" x2="21.2517" y2="-42.4875" gradientUnits="userSpaceOnUse"><stop stop-color="#30E3CA"/><stop offset="1" stop-color="#81FFE1"/></linearGradient></defs></svg>';

	const FeelSafe = () => (
		<SvgXml
			xml={svg}
			width={RFValue(props.width, 898)}
			height={RFValue(props.height, 898)}
		/>
	);

	return <FeelSafe />;
};

export default FeelSafe;