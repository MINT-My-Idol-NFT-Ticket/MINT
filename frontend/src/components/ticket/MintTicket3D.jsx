import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, useGLTF, Bounds, Html, useProgress, useTexture } from '@react-three/drei'
import MintTicketInfo from './MintTicketInfo'

function MintTicket3D({ concertData }) {
  const TicketMesh = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/mintticket3.glb')

    const src = JSON.parse(concertData.img).mp4

    const [video] = useState(() =>
      Object.assign(document.createElement('video'), {
        src: src,
        crossOrigin: 'Anonymous',
        loop: true,
        muted: true,
        offset: { x: 1, y: 1 },
      }),
    )
    const texture = Object.assign(new THREE.VideoTexture(video), { offset: { x: 0.2, y: 0 } })

    useEffect(() => video.play(), [video])
    const date = new Date()

    return (
      <group ref={group} {...concertData} dispose={null}>
        <group position={[-0.1, 4.74, 0]} scale={[10.52, 10.52, 0.02]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials.Front}
            scale={[-1, 1, 1]}>
            <meshBasicMaterial attach="material" transparent toneMapped={false} map={texture} />
            <Html></Html>
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials.Side}>
            <meshBasicMaterial attach="material" color="#13161B" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube001_1.geometry} material={materials.Back}>
            <meshBasicMaterial attach="material" color="#222831" />
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.img}
          position={[-0.08, 4.8, -0.02]}
          rotation={[-1.57, 0, 0]}
          scale={[-2.19, 2.19, 3.53]}>
          <meshBasicMaterial attach="material" color="#222831" />
          <Html rotation-x={Math.PI / 2} position={[-0, 0.008, 0]} transform occlude>
            <MintTicketInfo concertData={concertData} />
          </Html>
        </mesh>
      </group>
    )
  }

  const Loader = () => {
    const { progress } = useProgress()
    return <Html center>{progress}% loaded</Html>
  }

  return (
    <Canvas style={{ minHeight: '95vh' }} camera={{ position: [-0.1, 4.74, 0], fov: 80 }} shadowMap>
      <color attach="background" args={['#222831']} />
      <ambientLight intensity={1} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={<Loader />}>
        <Bounds fit clip margin={1.2}>
          <TicketMesh />
        </Bounds>
        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
        />
      </Suspense>
      <OrbitControls makeDefault enableZoom={true} enablePan={true} />
    </Canvas>
  )
}

export default MintTicket3D

useGLTF.preload('/mintticket3.glb')
