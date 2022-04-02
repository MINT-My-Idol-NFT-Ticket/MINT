import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls, Stars, useGLTF, Bounds, Html, useProgress, Text, MeshDistortMaterial } from '@react-three/drei'
import TicketModel from './mintticket3.glb'

function MintTicket3D(props) {
  const Loader = () => {
    const { progress } = useProgress()
    return <Html center>{progress}% loaded</Html>
  }

  const TicketMesh = () => {
    const group = useRef()
    const { nodes, materials } = useGLTF(`${TicketModel}`)
    const [front, back] = useLoader(TextureLoader, [
      // 'https://img.sbs.co.kr/newsnet/etv/upload/2020/10/28/30000654805_1280.jpg',
      'https://image.ytn.co.kr/general/jpg/2021/0507/202105071556373002_d.jpg',
      'http://newsimg.hankookilbo.com/2019/05/08/201905082306085099_1.jpg',
      // 'http://mrmaymay.com/wp-content/uploads/2017/10/MayMay-v%E1%BA%A3i-thun-k%E1%BA%BB-s%E1%BB%8Dc-viscose-00011-e1507747570434-180x180.jpg',
    ])
    useFrame(state => {
      const t = state.clock.getElapsedTime()
      group.current.rotation.x = Math.cos(t / 4) / 8
      group.current.rotation.y = Math.sin(t / 4) / 8
      group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })

    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[-0.1, 4.74, 0]} scale={[2.52, 2.52, 0.02]}>
          <mesh castShadow receiveShadow geometry={nodes.Cube001_2.geometry} material={materials.Front}>
            <meshBasicMaterial attach="material" transparent toneMapped={false} map={front} />
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
          scale={[2.19, 2.19, 3.53]}>
          <meshBasicMaterial attach="material" map={back} side={THREE.FrontSide} />
        </mesh>
      </group>
    )
  }

  return (
    <Canvas style={{ minHeight: '95vh' }} camera={{ position: [-0.1, 4.74, 0], fov: 80 }} shadowMap>
      <color attach="background" args={['#222831']} />
      <ambientLight intensity={1} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Suspense fallback={<></>}>
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
