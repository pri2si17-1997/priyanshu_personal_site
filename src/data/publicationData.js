import clef from '../assets/publications/clef.png';
import arxiv from '../assets/publications/arxiv.jpg';
import clinical_imaging from '../assets/publications/clinical_imaging.jpg';
import dcai from '../assets/publications/dcai_2021.png';
import hipoct from '../assets/publications/hi_poct_2022.png';
import iupui from '../assets/publications/iupui.png';
import jdi from '../assets/publications/JDI.png';
import kdh from '../assets/publications/KDH.png';
import midl from '../assets/publications/midl_2022.jpg';

export const PublicationData = [
    {
        's_no': 1,
        'image_path': midl,
        'title': 'Energy Efficiency of Quantized Neural Networks in Medical Imaging',
        'href': 'https://openreview.net/pdf?id=laP9b5P22kZ'
    },
    {
        's_no': 2,
        'image_path': hipoct,
        'title': 'Leapfrogging Medical AI in Low-Resource Contexts Using Edge Tensor Processing Unit',
        'href': 'https://ieeexplore.ieee.org/abstract/document/9744071',
    },
    {
        's_no': 3,
        'image_path': clinical_imaging,
        'title': 'Multireader evaluation of radiologist performance for COVID-19 detection on emergency department chest radiographs',
        'href': 'https://www.sciencedirect.com/science/article/pii/S089970712100423X'
    },
    {
        's_no': 4,
        'image_path': dcai,
        'title': 'Optimizing Medical Image Classification Models for Edge Devices',
        'href': 'https://link.springer.com/chapter/10.1007/978-3-030-86261-9_8',
    },
    {
        's_no': 5,
        'image_path': jdi,
        'title': 'A DICOM Framework for Machine Learning and Processing Pipelines Against Real-time Radiology Images',
        'href': 'https://link.springer.com/article/10.1007/s10278-021-00491-w'
    },
    {
        's_no': 6,
        'image_path': kdh,
        'title': 'Blood Glucose Level Prediction as Time-Series Modeling using Sequence-to-Sequence Neural Networks',
        'href': 'https://ceur-ws.org/Vol-2675/paper22.pdf',
    },
    {
        's_no': 7,
        'image_path': iupui,
        'title': 'Using ImageBERT to improve performance of multi-class Chest Xray classification',
        'href': 'https://core.ac.uk/download/pdf/333957001.pdf'
    },
    {
        's_no': 8,
        'image_path': arxiv,
        'title': 'Was there COVID-19 back in 2012? Challenge for AI in Diagnosis with Similar Indications',
        'href': 'https://arxiv.org/abs/2006.13262',
    },
    {
        's_no': 9,
        'image_path': clef,
        'title': 'Full training versus fine tuning for radiology images concept detection task for the imageclef 2019 challenge',
        'href': 'https://ceur-ws.org/Vol-2380/paper_146.pdf',
    },
]