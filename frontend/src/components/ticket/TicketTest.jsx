import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

const Screen = () => {
  const meshRef = useRef()
  useEffect(() => {
    const vid = document.createElement('video')
    vid.src = '/v.mp4'
    vid.crossOrigin = 'Anonymous'
    vid.loop = vid.muted = vid.playsInline = true
    vid.play()
    meshRef.current.material.map = new THREE.VideoTexture(vid)
  })
  return (
    <mesh ref={meshRef}>
      <planeGeometry attach="geometry" />
    </mesh>
  )
}
const TicketTest = () => {
  return (
    <Canvas camera={{ fov: 25 }}>
      <Screen />
    </Canvas>
  )
}

export default TicketTest
