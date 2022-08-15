import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router';
export default function Nav() {
  const router = useRouter();

  return ( 
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills"> 
          <li className="nav-item"> 
            <Link href="/">
              <a className={"nav-link " + (router.pathname == "/" ? "active" : "")}>Home</a>
            </Link>
          </li>
          <li className="nav-item"> 
            <Link href="/json">
              <a className={"nav-link " + (router.pathname == "/json" ? "active" : "")}>Json</a>
            </Link>
          </li>
          <li className="nav-item"> 
            <Link href="/mysql">
              <a className={"nav-link " + (router.pathname == "/mysql" ? "active" : "")}>MySql</a>
            </Link>
          </li>
        
          <li className="nav-item">
            <Link href="/about" activeClassName="active">
              <a className={"nav-link " + (router.pathname == "/about" ? "active" : "")}> About </a>
            </Link> 
          </li>
        </ul>
      </header> 
  )
}
