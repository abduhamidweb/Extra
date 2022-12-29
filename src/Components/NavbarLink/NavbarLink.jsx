import React from 'react';

const NavbarLink = ({clas,tabID,tab,href,role,ariaLabelledby,status , text}) => {
    return (
      <>
        <li class="nav-item" role="presentation">
          <a
            class={clas}
            id={tabID}
            data-mdb-toggle={tab}
            href={href}
            role={role}
            aria-controls={ariaLabelledby}
            aria-selected={status}
          >
            {text}
          </a>
        </li>
      </>
    );
};

export default NavbarLink;