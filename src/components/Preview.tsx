import React from "react";
import { Rnd } from "react-rnd";
import { Box, Input, InputGroup } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { numberToPixels, pixelsToNumber } from "../utils";
import { clamp, MaxDimensions, MinDimensions } from "../constants";

interface Preview {
	default: {
		height: number;
		width: number;
		x: number;
		y: number;
	};

	url: string;
	key?: any;
	handleLoad?: (e: any) => any;
}
export interface Dimension {
	width: number;
	height: number;
}

export const Preview: React.FC<Preview> = ({
	url,
	default: { height, width, x, y },
	handleLoad,
	key,
}) => {
	const [dimensions, setDimensions] = React.useState<Dimension>({
		width,
		height,
	});
	const [rndState, setRndState] = React.useState<{
		width: string;
		height: string;
	}>({ width: numberToPixels(width), height: numberToPixels(height) });

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		key: string
	) => {
		setDimensions({ ...dimensions, [key]: parseInt(event.target.value) });
	};
	const handleResize = (width: string, height: string) => {
		setDimensions({
			height: pixelsToNumber(height),
			width: pixelsToNumber(width),
		});
	};
	const syncRndState = () =>
		setRndState({
			width: numberToPixels(
				clamp(
					dimensions.width,
					MinDimensions.width,
					MaxDimensions.width
				)
			),
			height: numberToPixels(
				clamp(
					dimensions.height,
					MinDimensions.height,
					MaxDimensions.height
				)
			),
		});

	React.useEffect(() => {
		syncRndState();
	}, [dimensions]);

	return (
		<Rnd
			key={key}
			size={{
				height: rndState.height,
				width: rndState.width,
			}}
			onResize={(_, __, { style: { width, height } }) =>
				handleResize(width, height)
			}
			style={{ backgroundColor: "white", transition: 'all 0.1s' }}
		>
			<Box w="full" h="full" position="relative">
				<Box
					position="absolute"
					top="-3rem"
					w="full"
					height="3rem"
					display="flex"
					backgroundColor="gray.100"
					borderTopRightRadius="0.3rem"
					borderTopLeftRadius="0.3rem"
					p={2}
				>
					<InputGroup
						display="grid"
						gridTemplateColumns="repeat(7, minmax(0, 1fr))"
						justifySelf="flex-end"
						gridGap=""
						w="8%"
						minW="10rem"
						maxW="10rem"
					>
						<Input
							backgroundColor="white"
							height="full"
							type="number"
							size="sm"
							gridColumn="span 3 / span 3"
							borderRadius="0.1rem"
							onBlur={syncRndState}
							value={dimensions.width}
							textColor="black"
							onChange={(e) => handleChange(e, "width")}
							onKeyUp={(e) => e.key === "Enter" && syncRndState()}
						/>
						<SmallCloseIcon
							color="black"
							height="full"
							justifySelf="center"
							borderRadius="0.1rem"
							gridColumn="span 1 / span 1"
						/>
						<Input
							backgroundColor="white"
							height="full"
							size="sm"
							gridColumn="span 3 / span 3"
							type="number"
							borderRadius="0.1rem"
							onBlur={syncRndState}
							value={dimensions.height}
							textColor="black"
							onChange={(e) => handleChange(e, "height")}
							onKeyUp={(e) => e.key === "Enter" && syncRndState()}
						/>
					</InputGroup>
				</Box>
				<iframe
					width="100%"
					height="100%"
					src={url}
					title={`preview-${width}x${height}`}
					onLoad={handleLoad}
				></iframe>
			</Box>
		</Rnd>
	);
};
