import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAttemptsScore } from '../../Redux/AppReducer/Action';
import * as d3 from 'd3'
import { useRef } from 'react';
import style from './Graph.module.css'
import NavbarTop from '../../Component/NavbarTop';
function LineGraph() {

    const svgRef = useRef()

    const [allData, setAllData] = useState([])
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.authToken)


    console.log(allData)
    useEffect(() => {
        dispatch(GetAttemptsScore(token))
            .then((res) => {
                setAllData(res.payload.data)

            })
    }, [])


    const width = 500;
    const height = 400;
    const padding = 60;
    const maxValue = 20


    useEffect(() => {

        // Xscale

        const xScale = d3.scalePoint()
            .domain(allData.map((d) => d.attempt))
            .range([(0 + padding), (width - padding)])
        console.log(xScale(0), xScale(10))

        // Yscale

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(allData, function (d) { return d.scrore })])
            .range([(height - padding), (0 + padding)])


        console.log(yScale(0), yScale(50))


        // set function to draw a line

        const line = d3.line()
            .x((d) => xScale(d.attempt))
            .y((d) => yScale(d.scrore))
            .curve(d3.curveMonotoneX)

        console.log(line(allData))




        d3.select(svgRef.current)
            .select('path')
            .attr('d', (value) => line(allData))
            .attr('fill', 'none')
            .attr('stroke', 'black')


        const xAxis = d3.axisBottom(xScale)
        const yAxis = d3.axisLeft(yScale)


        d3.select('#xaxis').remove()
        d3.select(svgRef.current)
            .append('g')
            .attr('transform', `translate(0,${height - padding})`)
            .attr('id', 'xaxis')
            .call(xAxis)




        d3.select('#yaxis').remove()
        d3.select(svgRef.current)
            .append('g')
            .attr('transform', `translate(${padding},0)`)
            .attr('id', 'yaxis')
            .call(yAxis)


    }, [allData])

    return (
        <>
            <NavbarTop />
            <div style={{ marginTop: "8rem" }}>
                <h1 className='text-dark text-center' >Graph</h1>
                <div id={style.box}>

                    <h1 >Score</h1>
                    <>
                        <svg id='chart' ref={svgRef} viewBox='0 0 1000 400'>
                            <rect width='500' height='500' fill='rgb(140,137,131)' />
                            <path d='' fill='none' stroke='white' strokeWidth='2' />

                        </svg>
                    </>
                    <h1 className={style.attempt}>Attempt</h1>
                </div>
            </div>
        </>
    )
}

export default LineGraph
