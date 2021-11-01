import targetSelectorImage from '../../images/TargetImage_Resize_v1.png';
import { logLocation } from '../../utils';
import './RangeSelector.css';

function RangeSelector() {
    return (
        <div>
            <img src={targetSelectorImage} useMap="#image-map" alt="Location Picker"/>

            <map name="image-map">
                <area onClick={(e) => logLocation(e, 'bull-1')} alt="Bullseye 1" title="Bullseye 1" coords="260,178,293,244" shape="rect" />
                <area onClick={(e) => logLocation(e, 'bull-2')} alt="Bullseye 2" title="Bullseye 2" coords="293,176,260,120" shape="rect" />
                <area onClick={(e) => logLocation(e, 'bull-3')} alt="Bullseye 3" title="Bullseye 3" coords="261,60,292,118" shape="rect" />
                <area onClick={(e) => logLocation(e, 'bull-4')} alt="Bullseye 4" title="Bullseye 4" coords="260,2,293,58" shape="rect" />
                <area onClick={(e) => logLocation(e, 'Fr-1')} alt="Front Right 1" title="Front Right 1" coords="295,242,294,178,312,186,328,192,339,200,349,209,310,245" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Fr-2')} alt="Front Right 2" title="Front Right 2" coords="294,177,294,121,310,122,324,127,339,133,355,140,370,148,382,158,390,167,349,208,332,192,311,181" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Fr-3')} alt="Front Right 3" title="Front Right 3" coords="294,118,294,61,316,61,334,67,353,74,373,83,390,92,408,105,421,114,432,125,391,165,373,148,357,137,338,129,324,123,309,120" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Fr-4')} alt="Front Right 4" title="Front Right 4" coords="295,58,295,1,553,2,433,122,417,107,400,95,378,81,351,69,334,64,315,59" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Rf-1')} alt="Right Front 1" title="Right Front 1" coords="377,279,312,279,311,246,350,207,362,224,369,237,374,254,377,267" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Rf-2')} alt="Right Front 2" title="Right Front 2" coords="351,207,391,166,400,176,409,189,419,206,426,223,432,242,435,260,436,273,436,280,379,279,378,262,374,247,369,234,365,224,358,215" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Rf-3')} alt="Right Front 3" title="Right Front 3" coords="392,167,433,126,445,138,455,153,467,171,477,192,486,214,491,236,494,254,495,267,495,279,438,279,437,259,434,238,427,218,419,200,410,186,401,174" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Rf-4')} alt="Right Front 4" title="Right Front 4" coords="434,126,555,6,553,279,497,278,497,252,492,230,485,203,475,178,460,155,445,135" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Rr-1')} alt="Right Rear 1" title="Right Rear 1" coords="312,312,312,281,378,280,377,292,371,312,361,332,348,348" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Rr-2')} alt="Right Rear 2" title="Right Rear 2" coords="380,282,436,282,435,301,429,324,421,348,411,366,400,380,391,391,351,351,361,336,371,321,377,300" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Rr-3')} alt="Right Rear 3" title="Right Rear 3" coords="438,282,494,282,494,304,490,326,484,348,475,370,465,391,453,406,442,421,434,432,393,392,403,379,415,363,424,344,433,322,437,302" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Rr-4')} alt="Right Rear 4" title="Right Rear 4" coords="498,282,554,283,554,552,435,433,452,415,467,392,480,367,490,342,496,315,499,298" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Br-1')} alt="Back Right 1" title="Back Right 1" coords="278,380,278,316,310,314,345,350,334,362,318,372,298,378" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Br-2')} alt="Back Right 2" title="Back Right 2" coords="348,353,387,391,373,406,354,418,333,427,312,434,291,437,279,438,278,381,292,379,310,377,328,368,339,360" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Br-3')} alt="Back Right 3" title="Back Right 3" coords="277,442,295,440,313,438,332,432,350,424,369,413,381,402,390,394,430,435,415,449,390,466,365,478,340,489,317,493,295,497,278,498" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Br-4')} alt="Back Right 4" title="Back Right 4" coords="432,437,552,554,278,554,278,499,297,497,322,495,349,488,371,479,392,468,413,453" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Bl-1')} alt="Back Left 1" title="Back Left 1" coords="243,315,274,316,275,378,257,378,239,371,221,361,208,352" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Bl-2')} alt="Back Left 2" title="Back Left 2" coords="275,382,274,437,254,436,234,431,215,424,198,415,178,404,166,393,205,354,218,363,233,370,246,376,261,381" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Bl-3')} alt="Back Left 3" title="Back Left 3" coords="275,440,275,496,253,495,233,493,214,488,192,480,174,470,154,459,136,447,124,436,163,396,175,404,187,414,200,423,218,429,234,435,254,440" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Bl-4')} alt="Back Left 4" title="Back Left 4" coords="275,500,274,554,5,554,122,438,136,449,150,461,169,472,188,481,207,489,229,495,253,498" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Lr-1')} alt="Left Rear 1" title="Left Rear 1" coords="177,282,239,282,241,310,205,349,193,335,183,318,177,299" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Lr-2')} alt="Left Rear 2" title="Left Rear 2" coords="118,282,173,283,177,300,183,320,192,336,202,350,163,390,147,371,133,349,124,329,120,303" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Lr-3')} alt="Left Rear 3" title="Left Rear 3" coords="58,283,115,283,116,306,124,331,129,347,140,366,150,381,160,392,122,432,103,413,91,393,80,374,70,350,62,321" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Lr-4')} alt="Left Rear 4" title="Left Rear 4" coords="119,434,2,551,3,283,55,282,57,305,61,327,67,350,76,373,87,393,103,415" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Lf-1')} alt="Left Front 1" title="Left Front 1" coords="239,246,240,278,177,278,179,262,184,245,190,231,199,217,207,211" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Lf-2')} alt="Left Front 2" title="Left Front 2" coords="174,278,118,278,119,259,123,239,129,222,137,206,146,190,157,177,164,169,203,208,192,217,185,231,178,247,174,261" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Lf-3')} alt="Left Front 3" title="Left Front 3" coords="113,278,59,277,61,259,63,238,68,219,75,198,86,177,95,158,107,144,123,128,160,166,151,175,139,190,131,208,123,225,118,241,114,258" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Lf-4')} alt="Left Front 4" title="Left Front 4" coords="53,278,4,278,2,6,119,124,108,134,96,151,84,166,75,188,66,209,60,227,55,251" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Fl-1')} alt="Front Left 1" title="Front Left 1" coords="243,242,258,242,258,180,246,184,232,190,219,198,208,206" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Fl-2')} alt="Front Left 2" title="Front Left 2" coords="258,176,243,179,229,186,215,194,207,203,167,166,178,154,191,144,209,135,224,129,241,124,258,122" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Fl-3')} alt="Front Left 3" title="Front Left 3" coords="164,161,126,122,142,109,159,97,177,87,197,78,217,70,239,65,258,63,257,116,240,118,218,124,200,132,181,146" shape="poly" />
                <area onClick={(e) => logLocation(e, 'Fl-4')} alt="Front Left 4" title="Front Left 4" coords="123,119,6,4,258,3,257,56,239,59,220,62,204,67,183,76,164,85,150,95,135,106" shape="poly" />
            </map>
        </div>
    );
}

export default RangeSelector;