package helpers

import (
	"fmt"
	"io"
	"os"

	"github.com/sirupsen/logrus"
)

var logger *logrus.Entry

func InitLogs(isProd bool) {
	f, err := os.OpenFile("./log.txt", os.O_WRONLY|os.O_CREATE|os.O_APPEND, 0644)
	if err != nil {
		fmt.Println("Failed to create logfile" + "log.txt")
		panic(err)
	}
	// defer f.Close()

	log := &logrus.Logger{
		// Log into f file handler and on os.Stdout
		Out:          io.MultiWriter(f, os.Stdout),
		Level:        logrus.DebugLevel,
		ReportCaller: true,
		Formatter:    &logrus.TextFormatter{},
		// Formatter: &easy.Formatter{
		// 	TimestampFormat: "2006-01-02 15:04:05",
		// 	// LogFormat:       "[%lvl%]: %time% - %msg%\n",
		// },
	}
	logger = log.WithFields(logrus.Fields{"server": "ExamServer"})

}

func LogInfo(args ...interface{}) {
	logger.Info(args...)
}
func LogWarn(args ...interface{}) {
	logger.Warn(args...)
}
func LogDebug(args ...interface{}) {
	logger.Debug(args...)
}
