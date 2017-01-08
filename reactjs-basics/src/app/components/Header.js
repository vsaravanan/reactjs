/**
 * Created by Saravanan on 7/1/2017.
 */

import React from "react";


export const Header = (props) => {

        return (
            <nav class="navbar navbar-default" >
                <div class="container">
                    <div class="navbar-header">
                        <ul class="nav navbar-nav">
                            <li><a href="#">{props.homeLink}</a></li>

                        </ul>
                    </div>

                </div>
            </nav>
        );

}

// export class Header extends React.Component {
//     render() {
//         return (
//             <nav class="navbar navbar-default" >
//                 <div class="container">
//                 	<div class="navbar-header">
//                 		<ul class="nav navbar-nav">
//                 			<li><a href="#">Home</a></li>

//                 		</ul>
//                 	</div>

//                 </div>
//             </nav>
//         );
//     }
// }