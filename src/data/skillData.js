import {
    FaPython
} from 'react-icons/fa';

import {
    SiCplusplus,
    SiCodio,
    SiMysql,
    SiR,
    SiPostgresql,
    SiSqlite,
    SiMongodb,
    SiTensorflow,
    SiKeras,
    SiPytorch,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiScipy,
    SiOpencv,
    SiPlotly,
    SiApachespark,
    SiPytest,
    SiFlask,
    SiDjango,
    SiLinux,
    SiGit,
    SiDocker,
    SiAmazonaws,
    SiJupyter,
    SiKubernetes,
    SiRstudio,
    SiVim
} from 'react-icons/si';

import {
    DiJavascript1
} from 'react-icons/di';

export const skillsData = (size) => {
    const skills = {
        "python": <FaPython className='w-20 mx-auto'
            aria-label='python'
            size={size}
            color="white" />,
        "C": <SiCodio className='w-20 mx-auto'
            aria-label='C'
            size={size}
            color="white" />,
        "C++": <SiCplusplus className='w-20 mx-auto'
            aria-label='C++'
            size={size}
            color="white" />,
        "js": <DiJavascript1 className='w-20 mx-auto'
            aria-label='js'
            size={size}
            color="white" />,
        "r": <SiR className='w-20 mx-auto'
            aria-label='r'
            size={size}
            color="white" />,
        "mysql": <SiMysql className='w-20 mx-auto'
            aria-label='mysql'
            size={size}
            color="white" />,
        "postgresql": <SiPostgresql className='w-20 mx-auto'
            aria-label='postgresql'
            size={size}
            color="white" />,
        "sqlite": <SiSqlite className='w-20 mx-auto'
            aria-label='sqlite'
            size={size}
            color="white" />,
        "mongodb": <SiMongodb className='w-20 mx-auto'
            aria-label='mongodb'
            size={size}
            color="white" />,
        "tensorflow": <SiTensorflow className='w-20 mx-auto'
            aria-label='tensorflow'
            size={size}
            color="white" />,
        "keras": <SiKeras className='w-20 mx-auto'
            aria-label='keras'
            size={size}
            color="white" />,
        "pytorch": <SiPytorch className='w-20 mx-auto'
            aria-label='pytorch'
            size={size}
            color="white" />,
        "pandas": <SiPandas className='w-20 mx-auto'
            aria-label='pandas'
            size={size}
            color="white" />,
        "numpy": <SiNumpy className='w-20 mx-auto'
            aria-label='numpy'
            size={size}
            color="white" />,
        "scikit-learn": <SiScikitlearn className='w-20 mx-auto'
            aria-label='scikitlearn'
            size={size}
            color="white" />,
        "scipy": <SiScipy className='w-20 mx-auto'
            aria-label='scipy'
            size={size}
            color="white" />,
        "opencv": <SiOpencv className='w-20 mx-auto'
            aria-label='opencv'
            size={size}
            color="white" />,
        "plotly": <SiPlotly className='w-20 mx-auto'
            aria-label='plotly'
            size={size}
            color="white" />,
        "apachespark": <SiApachespark className='w-20 mx-auto'
            aria-label='apachespark'
            size={size}
            color="white" />,
        "pytest": <SiPytest className='w-20 mx-auto'
            aria-label='pytest'
            size={size}
            color="white" />,
        "flask": <SiFlask className='w-20 mx-auto'
            aria-label='flask'
            size={size}
            color="white" />,
        "django": <SiDjango className='w-20 mx-auto'
            aria-label='django'
            size={size}
            color="white" />,
        "linux": <SiLinux className='w-20 mx-auto'
            aria-label='linux'
            size={size}
            color="white" />,
        "git": <SiGit className='w-20 mx-auto'
            aria-label='git'
            size={size}
            color="white" />,
        "docker": <SiDocker className='w-20 mx-auto'
            aria-label='docker'
            size={size}
            color="white" />,
        "aws": <SiAmazonaws className='w-20 mx-auto'
            aria-label='aws'
            size={size}
            color="white" />,
        "jupyter": <SiJupyter className='w-20 mx-auto'
            aria-label='jupyter'
            size={size}
            color="white" />,
        "kubernetes": <SiKubernetes className='w-20 mx-auto'
            aria-label='kubernetes'
            size={size}
            color="white" />,
        "rstudio": <SiRstudio className='w-20 mx-auto'
            aria-label='rstudio'
            size={size}
            color="white" />,
        "vim": <SiVim className='w-20 mx-auto'
            aria-label='vim'
            size={size}
            color="white" />,
    };

    return skills;
}