import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Tree, TreeNode } from 'react-organizational-chart'

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`



const genderTree = node => {
  const handleClick = it => {
    console.log('clicked ', it.name)
  }
  return node?.map((it, i) => (
    <>
      <TreeNode
        key={it}
        label={
          <StyledNode onClick={() => handleClick(it)}>{it.name}</StyledNode>
        }
      >
        {(() => {
          return genderTree(it?.children)
        })()}
      </TreeNode>
      {it.id === '111' && <TreeNode label={<input/>}></TreeNode>}
      {/* <input/> */}
    </>
  ))
}

const StyledTreeExample = () => {
  return <Tree
    lineWidth={'2px'}
    lineColor={'green'}
    lineBorderRadius={'10px'}
    label={<StyledNode>Root</StyledNode>}
  >
    {genderTree(data)}
  </Tree>
}

export default StyledTreeExample

const data = [
  {
    id: '1',
    name: 'Sub-roots',
    children: [
      {
        id: '11',
        name: 'Child 1',
        children: [
          {
            id: '111',
            name: 'Grand Child',
            children: []
          }
        ]
      },
      {
        id: '12',
        name: 'Child 2',
        children: [
          {
            id: '121',
            name: 'Gran Children 1',
            children: [
              {
                id: '1211',
                name: 'hiland',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: '13',
        name: 'Child 3',
        children: []
      },
      {
        id: '13',
        name: 'Child 3',
        children: []
      },
      {
        id: '13',
        name: 'Child 3',
        children: []
      },
      {
        id: '13',
        name: 'Child 3',
        children: []
      }
    ]
  }
]

