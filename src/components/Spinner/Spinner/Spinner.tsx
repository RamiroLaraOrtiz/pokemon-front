import {default as pokeSpinner}  from "../../../assets/pokeSpinner.gif";
import { SpinnerContainer } from "../../../styled-components/Card/SpinnerContainer";
import { Continer } from "../../../models/Container";

export function Spinner ({display}:Continer) {
	return <SpinnerContainer display={display}>
		<img src={pokeSpinner} alt="loading..." />
	</SpinnerContainer>;
};

