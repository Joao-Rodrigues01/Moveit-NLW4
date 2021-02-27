import { IconType } from "react-icons";

interface CicleButtonProps {
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	title: string;
	icon : IconType;
	onClick?: () => void;
	iconColor: string;
	iconSize: number;
	style?: object;
	className: string;
}

export function CicleButton({
	type,
	title,
	icon: Icon,
	iconColor,
	disabled,
	style,
	iconSize,
	onClick,
	className,
	...rest }: CicleButtonProps) {
	return (
		<button
		disabled={disabled}
		type={type}
		onClick={onClick}
		className={className}
		{...rest}
		>
		{title}
		{Icon && <Icon size={iconSize} color={iconColor} />}
	</button>
	);
};
