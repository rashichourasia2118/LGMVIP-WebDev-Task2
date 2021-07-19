import React from 'react'
import styled from 'styled-components'
 const PageNotFound=styled.p `
 font-size:46px;
 font-weight:bold;
 height:100vh;
 `
export default function NotFound() {
    return (
        <div>
            <PageNotFound>Error 404 not found</PageNotFound>
        </div>
    )
}
